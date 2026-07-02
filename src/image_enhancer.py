import sys
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
from PyQt5.QtCore import Qt, QTimer
from PyQt5.QtGui import QImage, QPixmap
from PyQt5.QtWidgets import (
    QApplication,
    QCheckBox,
    QFileDialog,
    QFrame,
    QGridLayout,
    QHBoxLayout,
    QLabel,
    QMainWindow,
    QMessageBox,
    QPushButton,
    QScrollArea,
    QSlider,
    QVBoxLayout,
    QWidget,
)


PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = PROJECT_ROOT / "output"


def pil_to_pixmap(image):
    """Convert a PIL image into a QPixmap for preview."""
    rgba = image.convert("RGBA")
    data = rgba.tobytes("raw", "RGBA")
    qimage = QImage(data, rgba.width, rgba.height, QImage.Format_RGBA8888)
    return QPixmap.fromImage(qimage)


class ImageEnhancer(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Image Enhancer - 本地修图工具")
        self.resize(1180, 760)

        self.original_image = None
        self.current_image = None
        self.current_path = None
        self.preview_scale = 1.0
        self.preview_source_image = None
        self.face_detection_cache = {}

        self.image_label = QLabel("请选择一张图片开始修图")
        self.image_label.setAlignment(Qt.AlignCenter)
        self.image_label.setMinimumSize(720, 520)
        self.image_label.setStyleSheet("color: #666; font-size: 18px; background: #f6f7fb;")
        self.slider_labels = {}
        self.preview_timer = QTimer(self)
        self.preview_timer.setSingleShot(True)
        self.preview_timer.timeout.connect(self.update_preview_now)

        scroll_area = QScrollArea()
        scroll_area.setWidgetResizable(True)
        scroll_area.setWidget(self.image_label)

        main_layout = QHBoxLayout()
        main_layout.addWidget(scroll_area, 1)
        main_layout.addWidget(self.build_control_panel())

        container = QWidget()
        container.setLayout(main_layout)
        self.setCentralWidget(container)
        self.apply_styles()

    def build_control_panel(self):
        panel = QFrame()
        panel.setFixedWidth(330)
        panel.setObjectName("controlPanel")

        layout = QVBoxLayout()
        layout.setSpacing(14)

        title = QLabel("修图参数")
        title.setObjectName("title")
        layout.addWidget(title)

        open_button = QPushButton("打开图片")
        open_button.clicked.connect(self.open_image)
        layout.addWidget(open_button)

        save_button = QPushButton("另存为")
        save_button.clicked.connect(self.save_image)
        layout.addWidget(save_button)

        beautify_button = QPushButton("人像一键美化")
        beautify_button.setObjectName("beautifyButton")
        beautify_button.clicked.connect(self.apply_one_click_beautify)
        layout.addWidget(beautify_button)

        wedding_button = QPushButton("婚纱照一键精修")
        wedding_button.setObjectName("weddingButton")
        wedding_button.clicked.connect(self.apply_wedding_beautify)
        layout.addWidget(wedding_button)

        reset_button = QPushButton("重置效果")
        reset_button.clicked.connect(self.reset_adjustments)
        layout.addWidget(reset_button)

        layout.addSpacing(8)

        self.sliders = {}
        layout.addLayout(self.create_slider("brightness", "亮度", -100, 100, 0))
        layout.addLayout(self.create_slider("contrast", "对比度", -100, 100, 0))
        layout.addLayout(self.create_slider("saturation", "饱和度", -100, 100, 0))
        layout.addLayout(self.create_slider("sharpness", "锐化", 0, 100, 0))
        layout.addLayout(self.create_slider("denoise", "降噪", 0, 100, 0))
        layout.addLayout(self.create_slider("whitening", "美白", 0, 100, 0))
        layout.addLayout(self.create_slider("skin_smooth", "磨皮", 0, 100, 0))
        layout.addLayout(self.create_slider("face_slim", "瘦脸", 0, 100, 0))
        layout.addLayout(self.create_slider("soft_glow", "柔光", 0, 100, 0))

        self.grayscale_check = QCheckBox("黑白效果")
        self.grayscale_check.stateChanged.connect(self.schedule_preview_update)
        layout.addWidget(self.grayscale_check)

        rotate_layout = QGridLayout()
        rotate_left = QPushButton("左转 90°")
        rotate_left.clicked.connect(lambda: self.rotate_image(-90))
        rotate_right = QPushButton("右转 90°")
        rotate_right.clicked.connect(lambda: self.rotate_image(90))
        rotate_layout.addWidget(rotate_left, 0, 0)
        rotate_layout.addWidget(rotate_right, 0, 1)
        layout.addLayout(rotate_layout)

        zoom_layout = QGridLayout()
        zoom_out = QPushButton("缩小预览")
        zoom_out.clicked.connect(lambda: self.zoom_preview(0.85))
        zoom_in = QPushButton("放大预览")
        zoom_in.clicked.connect(lambda: self.zoom_preview(1.15))
        zoom_fit = QPushButton("适合窗口")
        zoom_fit.clicked.connect(self.fit_preview)
        zoom_layout.addWidget(zoom_out, 0, 0)
        zoom_layout.addWidget(zoom_in, 0, 1)
        zoom_layout.addWidget(zoom_fit, 1, 0, 1, 2)
        layout.addLayout(zoom_layout)

        self.info_label = QLabel("支持 JPG、PNG、WEBP、BMP、TIFF")
        self.info_label.setWordWrap(True)
        self.info_label.setObjectName("info")
        layout.addWidget(self.info_label)

        layout.addStretch()
        panel.setLayout(layout)
        return panel

    def create_slider(self, key, label_text, minimum, maximum, value):
        row = QVBoxLayout()
        label = QLabel(f"{label_text}: {value}")
        slider = QSlider(Qt.Horizontal)
        slider.setRange(minimum, maximum)
        slider.setValue(value)
        slider.setTracking(False)
        slider.sliderMoved.connect(lambda new_value, l=label, t=label_text: self.update_slider_label(l, t, new_value))
        slider.valueChanged.connect(lambda new_value, k=key, l=label, t=label_text: self.on_slider_change(k, l, t, new_value))
        self.sliders[key] = slider
        self.slider_labels[key] = (label, label_text)
        row.addWidget(label)
        row.addWidget(slider)
        return row

    def update_slider_label(self, label, label_text, value):
        label.setText(f"{label_text}: {value}")

    def on_slider_change(self, key, label, label_text, value):
        label.setText(f"{label_text}: {value}")
        self.schedule_preview_update()

    def open_image(self):
        path, _ = QFileDialog.getOpenFileName(
            self,
            "选择图片",
            str(Path.home()),
            "Images (*.jpg *.jpeg *.png *.webp *.bmp *.tif *.tiff)",
        )
        if not path:
            return

        try:
            image = Image.open(path)
            image = ImageOps.exif_transpose(image).convert("RGB")
        except Exception as exc:
            QMessageBox.critical(self, "打开失败", f"无法打开图片：{exc}")
            return

        self.original_image = image
        self.current_image = None
        self.current_path = Path(path)
        self.preview_scale = 1.0
        self.preview_source_image = None
        self.face_detection_cache.clear()
        self.update_preview_now()
        self.update_info()

    def save_image(self):
        if self.original_image is None:
            QMessageBox.information(self, "提示", "请先打开一张图片")
            return

        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        default_name = "enhanced_image.png"
        if self.current_path:
            default_name = f"{self.current_path.stem}_enhanced.png"
        default_path = OUTPUT_DIR / default_name

        path, _ = QFileDialog.getSaveFileName(
            self,
            "保存图片",
            str(default_path),
            "PNG (*.png);;JPEG (*.jpg *.jpeg);;WEBP (*.webp);;BMP (*.bmp)",
        )
        if not path:
            return

        try:
            QApplication.setOverrideCursor(Qt.WaitCursor)
            save_image = self.build_processed_image(self.original_image.copy())
            suffix = Path(path).suffix.lower()
            if suffix in {".jpg", ".jpeg"}:
                save_image = save_image.convert("RGB")
                save_image.save(path, quality=95, optimize=True)
            else:
                save_image.save(path)
            QMessageBox.information(self, "保存成功", f"图片已保存到：\n{path}")
        except Exception as exc:
            QMessageBox.critical(self, "保存失败", f"保存图片失败：{exc}")
        finally:
            QApplication.restoreOverrideCursor()

    def reset_adjustments(self):
        if self.original_image is None:
            return
        for slider in self.sliders.values():
            slider.blockSignals(True)
            slider.setValue(0)
            slider.blockSignals(False)
        for label, label_text in self.slider_labels.values():
            label.setText(f"{label_text}: 0")
        self.grayscale_check.setChecked(False)
        self.update_preview_now()

    def apply_one_click_beautify(self):
        if self.original_image is None:
            QMessageBox.information(self, "提示", "请先打开一张人像图片")
            return

        self.apply_preset({
            "brightness": 8,
            "contrast": 6,
            "saturation": 8,
            "sharpness": 16,
            "denoise": 18,
            "whitening": 32,
            "skin_smooth": 42,
            "face_slim": 28,
            "soft_glow": 0,
        })

    def apply_wedding_beautify(self):
        if self.original_image is None:
            QMessageBox.information(self, "提示", "请先打开一张婚纱照")
            return

        self.apply_preset({
            "brightness": 12,
            "contrast": 8,
            "saturation": 6,
            "sharpness": 10,
            "denoise": 16,
            "whitening": 45,
            "skin_smooth": 48,
            "face_slim": 18,
            "soft_glow": 36,
        })

    def apply_preset(self, preset_values):
        for key, value in preset_values.items():
            slider = self.sliders[key]
            slider.blockSignals(True)
            slider.setValue(value)
            slider.blockSignals(False)
            label, label_text = self.slider_labels[key]
            label.setText(f"{label_text}: {value}")

        self.grayscale_check.setChecked(False)
        self.update_preview_now()

    def rotate_image(self, angle):
        if self.original_image is None:
            QMessageBox.information(self, "提示", "请先打开一张图片")
            return
        if angle > 0:
            self.original_image = self.original_image.transpose(Image.Transpose.ROTATE_270)
        else:
            self.original_image = self.original_image.transpose(Image.Transpose.ROTATE_90)
        self.preview_source_image = None
        self.face_detection_cache.clear()
        self.update_preview_now()
        self.update_info()

    def zoom_preview(self, factor):
        if self.current_image is None:
            return
        self.preview_scale = max(0.1, min(5.0, self.preview_scale * factor))
        self.render_preview()

    def fit_preview(self):
        self.preview_scale = 1.0
        self.render_preview()

    def schedule_preview_update(self):
        if self.original_image is None:
            return
        self.preview_timer.start(220)

    def update_preview(self):
        self.schedule_preview_update()

    def update_preview_now(self):
        if self.original_image is None:
            return
        image = self.build_processed_image(self.get_preview_source_image().copy())
        self.current_image = image
        self.render_preview()

    def get_preview_source_image(self):
        if self.preview_source_image is None:
            image = self.original_image.copy()
            image.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
            self.preview_source_image = image
        return self.preview_source_image

    def build_processed_image(self, image):
        brightness = 1 + self.sliders["brightness"].value() / 100
        contrast = 1 + self.sliders["contrast"].value() / 100
        saturation = 1 + self.sliders["saturation"].value() / 100
        sharpness = 1 + self.sliders["sharpness"].value() / 25
        denoise = self.sliders["denoise"].value()
        whitening = self.sliders["whitening"].value()
        skin_smooth = self.sliders["skin_smooth"].value()
        face_slim = self.sliders["face_slim"].value()
        soft_glow = self.sliders["soft_glow"].value()

        image = ImageEnhance.Brightness(image).enhance(max(0.01, brightness))
        image = ImageEnhance.Contrast(image).enhance(max(0.01, contrast))
        image = ImageEnhance.Color(image).enhance(max(0.0, saturation))

        if whitening > 0:
            image = self.apply_whitening(image, whitening)

        if skin_smooth > 0:
            image = self.apply_skin_smooth(image, skin_smooth)

        if sharpness > 1:
            image = ImageEnhance.Sharpness(image).enhance(sharpness)

        if denoise > 0:
            image = self.apply_denoise(image, denoise)

        if face_slim > 0:
            image = self.apply_face_slim(image, face_slim)

        if soft_glow > 0:
            image = self.apply_soft_glow(image, soft_glow)

        if self.grayscale_check.isChecked():
            image = ImageOps.grayscale(image).convert("RGB")

        return image

    def apply_denoise(self, image, strength):
        array = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
        h = max(1, int(strength / 4))
        denoised = cv2.fastNlMeansDenoisingColored(array, None, h, h, 7, 21)
        rgb = cv2.cvtColor(denoised, cv2.COLOR_BGR2RGB)
        result = Image.fromarray(rgb)
        if strength > 60:
            result = result.filter(ImageFilter.SMOOTH_MORE)
        return result

    def apply_whitening(self, image, strength):
        array = np.array(image).astype(np.float32)
        factor = strength / 100
        mask = self.build_skin_mask(image)[:, :, None]
        whitened = array + (255 - array) * (0.26 * factor * mask)
        luminance = (
            whitened[:, :, 0] * 0.299
            + whitened[:, :, 1] * 0.587
            + whitened[:, :, 2] * 0.114
        )[:, :, None]
        whitened = luminance + (whitened - luminance) * (1 - 0.16 * factor * mask)
        result = np.clip(whitened, 0, 255).astype(np.uint8)
        return Image.fromarray(result)

    def apply_skin_smooth(self, image, strength):
        array = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
        smooth = cv2.bilateralFilter(array, 9, 35 + strength, 35 + strength)
        blur = cv2.GaussianBlur(smooth, (0, 0), 1.0 + strength / 30)
        alpha = min(0.75, 0.18 + strength / 120)
        mask = self.build_skin_mask(image)[:, :, None]
        blended = array.astype(np.float32) * (1 - alpha * mask) + blur.astype(np.float32) * (alpha * mask)
        rgb = cv2.cvtColor(blended, cv2.COLOR_BGR2RGB)
        return Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8))

    def build_skin_mask(self, image):
        rgb = np.array(image.convert("RGB"))
        hsv = cv2.cvtColor(rgb, cv2.COLOR_RGB2HSV)
        ycrcb = cv2.cvtColor(rgb, cv2.COLOR_RGB2YCrCb)

        r = rgb[:, :, 0].astype(np.float32)
        g = rgb[:, :, 1].astype(np.float32)
        b = rgb[:, :, 2].astype(np.float32)
        max_rgb = np.max(rgb, axis=2).astype(np.float32)
        min_rgb = np.min(rgb, axis=2).astype(np.float32)
        chroma = max_rgb - min_rgb
        luminance = r * 0.299 + g * 0.587 + b * 0.114
        hue = hsv[:, :, 0].astype(np.float32) * 2
        saturation = hsv[:, :, 1].astype(np.float32) / 255
        value = hsv[:, :, 2].astype(np.float32) / 255
        cr = ycrcb[:, :, 1].astype(np.float32)
        cb = ycrcb[:, :, 2].astype(np.float32)

        rgb_skin = (
            (r > 45)
            & (g > 30)
            & (b > 18)
            & (r >= b)
            & (g >= b * 0.72)
            & (chroma > 10)
            & (luminance > 35)
        )
        ycrcb_skin = (cb >= 74) & (cb <= 145) & (cr >= 128) & (cr <= 188) & (luminance > 38)
        hue_skin = ((hue <= 52) | (hue >= 345)) & (saturation >= 0.08) & (saturation <= 0.72) & (value >= 0.18)
        not_white_dress = ~((luminance > 218) & (saturation < 0.16))
        not_deep_shadow = luminance > 28

        score = rgb_skin.astype(np.float32) + ycrcb_skin.astype(np.float32) + hue_skin.astype(np.float32)
        mask = np.zeros(score.shape, dtype=np.float32)
        mask[score >= 3] = 1
        mask[score == 2] = 0.72
        mask[(score == 1) & ycrcb_skin & (chroma > 16)] = 0.38
        mask *= not_white_dress.astype(np.float32) * not_deep_shadow.astype(np.float32)

        radius = max(3, int(min(mask.shape[:2]) / 180))
        kernel_size = radius * 2 + 1
        mask = cv2.GaussianBlur(mask, (kernel_size, kernel_size), 0)
        return np.clip(mask, 0, 1)

    def apply_face_slim(self, image, strength):
        array = np.array(image)
        gray = cv2.cvtColor(array, cv2.COLOR_RGB2GRAY)
        cascade_path = Path(cv2.data.haarcascades) / "haarcascade_frontalface_default.xml"
        detector = cv2.CascadeClassifier(str(cascade_path))
        cache_key = (array.shape[1], array.shape[0])
        faces = self.face_detection_cache.get(cache_key)
        if faces is None:
            faces = detector.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(80, 80))
            self.face_detection_cache[cache_key] = faces
        if len(faces) == 0:
            return image

        height, width = array.shape[:2]
        map_x, map_y = np.meshgrid(np.arange(width, dtype=np.float32), np.arange(height, dtype=np.float32))
        slim_ratio = 0.24 * (strength / 100)

        for x, y, w, h in faces:
            center_x = x + w / 2
            center_y = y + h * 0.55
            radius_x = w * 0.52
            radius_y = h * 0.55

            left = max(0, int(center_x - radius_x))
            right = min(width, int(center_x + radius_x))
            top = max(0, int(center_y - radius_y))
            bottom = min(height, int(center_y + radius_y))
            if left >= right or top >= bottom:
                continue

            roi_x = map_x[top:bottom, left:right]
            roi_y = map_y[top:bottom, left:right]
            dx = (roi_x - center_x) / radius_x
            dy = (roi_y - center_y) / radius_y
            mask = (dx * dx + dy * dy) <= 1
            weight = np.clip((1 - dx * dx) * (1 - dy * dy), 0, 1) * mask
            shrink = np.clip(1 - slim_ratio * weight, 0.72, 1)
            map_x[top:bottom, left:right] = center_x + (roi_x - center_x) / shrink

        remapped = cv2.remap(array, map_x, map_y, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)
        return Image.fromarray(remapped)

    def apply_soft_glow(self, image, strength):
        factor = strength / 100
        array = np.array(image).astype(np.float32)
        blur = cv2.GaussianBlur(array, (0, 0), 8 + strength / 4)
        glow = cv2.addWeighted(array, 1.0, blur, 0.18 + factor * 0.22, 0)
        glow = glow + (255 - glow) * (0.05 + factor * 0.08)
        hsv = cv2.cvtColor(np.clip(glow, 0, 255).astype(np.uint8), cv2.COLOR_RGB2HSV).astype(np.float32)
        hsv[:, :, 1] *= 1 - factor * 0.08
        result = cv2.cvtColor(np.clip(hsv, 0, 255).astype(np.uint8), cv2.COLOR_HSV2RGB)
        return Image.fromarray(result)

    def render_preview(self):
        if self.current_image is None:
            return
        pixmap = pil_to_pixmap(self.current_image)
        if self.preview_scale != 1.0:
            width = int(pixmap.width() * self.preview_scale)
            height = int(pixmap.height() * self.preview_scale)
            pixmap = pixmap.scaled(width, height, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        else:
            pixmap = pixmap.scaled(
                self.image_label.size(),
                Qt.KeepAspectRatio,
                Qt.SmoothTransformation,
            )
        self.image_label.setPixmap(pixmap)

    def resizeEvent(self, event):
        super().resizeEvent(event)
        if self.preview_scale == 1.0:
            self.render_preview()

    def update_info(self):
        if not self.original_image:
            return
        name = self.current_path.name if self.current_path else "未命名"
        width, height = self.original_image.size
        self.info_label.setText(f"当前图片：{name}\n尺寸：{width} x {height}")

    def apply_styles(self):
        self.setStyleSheet(
            """
            QMainWindow {
                background: #eef2f7;
            }
            #controlPanel {
                background: white;
                border-left: 1px solid #d9e1ec;
                padding: 14px;
            }
            #title {
                color: #1d4ed8;
                font-size: 22px;
                font-weight: bold;
            }
            #info {
                color: #5f6b7a;
                background: #f3f7ff;
                border-radius: 8px;
                padding: 10px;
            }
            QPushButton {
                background: #2563eb;
                color: white;
                border: none;
                border-radius: 8px;
                padding: 10px 12px;
                font-size: 14px;
                font-weight: bold;
            }
            QPushButton:hover {
                background: #1d4ed8;
            }
            QPushButton:pressed {
                background: #1e40af;
            }
            #beautifyButton {
                background: #ec4899;
            }
            #beautifyButton:hover {
                background: #db2777;
            }
            #beautifyButton:pressed {
                background: #be185d;
            }
            #weddingButton {
                background: #f59e0b;
            }
            #weddingButton:hover {
                background: #d97706;
            }
            #weddingButton:pressed {
                background: #b45309;
            }
            QSlider::groove:horizontal {
                height: 6px;
                border-radius: 3px;
                background: #dbe4f0;
            }
            QSlider::handle:horizontal {
                width: 18px;
                height: 18px;
                margin: -6px 0;
                border-radius: 9px;
                background: #2563eb;
            }
            QCheckBox {
                font-size: 14px;
                color: #27364a;
            }
            """
        )


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    app = QApplication(sys.argv)
    window = ImageEnhancer()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
