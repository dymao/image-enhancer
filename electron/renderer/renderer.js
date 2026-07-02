const controlsConfig = [
  { key: 'brightness', label: '亮度', min: -100, max: 100, value: 0 },
  { key: 'contrast', label: '对比度', min: -100, max: 100, value: 0 },
  { key: 'saturation', label: '饱和度', min: -100, max: 100, value: 0 },
  { key: 'sharpness', label: '锐化', min: 0, max: 100, value: 0 },
  { key: 'denoise', label: '降噪', min: 0, max: 100, value: 0 },
  { key: 'whitening', label: '美白', min: 0, max: 100, value: 0 },
  { key: 'skinSmooth', label: '磨皮', min: 0, max: 100, value: 0 },
  { key: 'faceSlim', label: '瘦脸', min: 0, max: 100, value: 0 },
  { key: 'softGlow', label: '柔光', min: 0, max: 100, value: 0 },
];

const presets = {
  reset: {
    brightness: 0,
    contrast: 0,
    saturation: 0,
    sharpness: 0,
    denoise: 0,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 0,
  },
  portrait: {
    brightness: 8,
    contrast: 6,
    saturation: 8,
    sharpness: 16,
    denoise: 18,
    whitening: 32,
    skinSmooth: 42,
    faceSlim: 28,
    softGlow: 0,
  },
  wedding: {
    brightness: 12,
    contrast: 8,
    saturation: 6,
    sharpness: 10,
    denoise: 16,
    whitening: 45,
    skinSmooth: 48,
    faceSlim: 18,
    softGlow: 36,
  },
};

const stylePresets = {
  blueSky: {
    label: '蓝天白云',
    controls: {
      brightness: 8,
      contrast: 12,
      saturation: 16,
      sharpness: 18,
      denoise: 8,
      whitening: 12,
      skinSmooth: 10,
      faceSlim: 0,
      softGlow: 8,
    },
  },
  cyanYouth: {
    label: '青色青春',
    controls: {
      brightness: 10,
      contrast: 4,
      saturation: 10,
      sharpness: 8,
      denoise: 12,
      whitening: 26,
      skinSmooth: 26,
      faceSlim: 8,
      softGlow: 12,
    },
  },
  warmFilm: {
    label: '暖阳胶片',
    controls: {
      brightness: 6,
      contrast: 10,
      saturation: 8,
      sharpness: 6,
      denoise: 10,
      whitening: 12,
      skinSmooth: 18,
      faceSlim: 0,
      softGlow: 24,
    },
  },
  premiumGray: {
    label: '高级灰',
    controls: {
      brightness: 2,
      contrast: 16,
      saturation: -18,
      sharpness: 14,
      denoise: 8,
      whitening: 10,
      skinSmooth: 12,
      faceSlim: 0,
      softGlow: 4,
    },
  },
};

const state = {
  sourceName: '',
  originalImage: null,
  values: { ...presets.reset },
  grayscale: false,
  styleMode: 'none',
  renderTimer: null,
};

const previewCanvas = document.getElementById('previewCanvas');
const previewContext = previewCanvas.getContext('2d', { willReadFrequently: true });
const canvasCard = document.querySelector('.canvas-card');
const controlsElement = document.getElementById('controls');
const emptyState = document.getElementById('emptyState');
const fileName = document.getElementById('fileName');
const imageMeta = document.getElementById('imageMeta');
const saveButton = document.getElementById('saveButton');
const toast = document.getElementById('toast');
const grayscaleToggle = document.getElementById('grayscaleToggle');

const sliderElements = new Map();
const valueElements = new Map();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function createControls() {
  controlsConfig.forEach((config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'control';

    const head = document.createElement('div');
    head.className = 'control-head';

    const label = document.createElement('span');
    label.textContent = config.label;

    const value = document.createElement('span');
    value.textContent = String(config.value);

    const input = document.createElement('input');
    input.type = 'range';
    input.min = config.min;
    input.max = config.max;
    input.value = config.value;
    input.dataset.key = config.key;

    input.addEventListener('input', () => {
      state.values[config.key] = Number(input.value);
      value.textContent = input.value;
      schedulePreviewRender();
    });

    head.append(label, value);
    wrapper.append(head, input);
    controlsElement.appendChild(wrapper);
    sliderElements.set(config.key, input);
    valueElements.set(config.key, value);
  });
}

function setControlValues(values) {
  Object.entries(values).forEach(([key, value]) => {
    state.values[key] = value;
    const slider = sliderElements.get(key);
    const valueLabel = valueElements.get(key);
    if (slider) slider.value = value;
    if (valueLabel) valueLabel.textContent = String(value);
  });
}

function schedulePreviewRender() {
  if (!state.originalImage) return;
  clearTimeout(state.renderTimer);
  state.renderTimer = setTimeout(renderPreview, 80);
}

async function openImage() {
  const result = await window.imageEnhancer.openImage();
  if (!result) return;

  const image = new Image();
  image.onload = () => {
    state.originalImage = image;
    state.sourceName = result.name;
    fileName.textContent = result.name;
    imageMeta.textContent = `${image.naturalWidth} x ${image.naturalHeight}`;
    emptyState.style.display = 'none';
    previewCanvas.style.display = 'block';
    saveButton.disabled = false;
    renderPreview();
  };
  image.onerror = () => showToast('图片加载失败');
  image.src = result.dataUrl;
}

async function saveImage() {
  if (!state.originalImage) {
    showToast('请先打开图片');
    return;
  }

  showToast('正在生成全尺寸图片...');
  const outputCanvas = buildProcessedCanvas(state.originalImage, Number.POSITIVE_INFINITY);
  const dataUrl = outputCanvas.toDataURL('image/png');
  const savedPath = await window.imageEnhancer.saveImage({
    sourceName: state.sourceName,
    dataUrl,
  });

  if (savedPath) {
    showToast('图片已保存');
  }
}

function applyPreset(name) {
  setControlValues(presets[name]);
  grayscaleToggle.checked = false;
  state.grayscale = false;
  state.styleMode = 'none';
  renderPreview();
}

function applyStylePreset(name) {
  const style = stylePresets[name];
  if (!style) return;

  setControlValues(style.controls);
  grayscaleToggle.checked = false;
  state.grayscale = false;
  state.styleMode = name;
  renderPreview();
  showToast(`已应用：${style.label}`);
}

function renderPreview() {
  if (!state.originalImage) return;

  const canvas = buildProcessedCanvas(state.originalImage, 1500);
  previewCanvas.width = canvas.width;
  previewCanvas.height = canvas.height;
  previewContext.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  previewContext.drawImage(canvas, 0, 0);
  fitPreviewCanvasToContainer();
}

function fitPreviewCanvasToContainer() {
  if (!previewCanvas.width || !previewCanvas.height) return;

  const styles = window.getComputedStyle(canvasCard);
  const paddingX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  const availableWidth = Math.max(1, canvasCard.clientWidth - paddingX);
  const availableHeight = Math.max(1, canvasCard.clientHeight - paddingY);
  const scale = Math.min(
    availableWidth / previewCanvas.width,
    availableHeight / previewCanvas.height,
    1
  );

  previewCanvas.style.width = `${Math.floor(previewCanvas.width * scale)}px`;
  previewCanvas.style.height = `${Math.floor(previewCanvas.height * scale)}px`;
}

function buildProcessedCanvas(image, maxSize) {
  const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d', { willReadFrequently: true });

  context.drawImage(image, 0, 0, width, height);
  applyPixelAdjustments(context, width, height);
  const skinMask = buildSkinMask(context, width, height);

  if (state.values.whitening > 0) {
    applySkinWhitening(context, width, height, state.values.whitening, skinMask);
  }

  if (state.values.skinSmooth > 0 || state.values.denoise > 0) {
    applySmoothOverlay(context, canvas, state.values.skinSmooth, state.values.denoise, skinMask);
  }

  if (state.values.sharpness > 0) {
    applySharpen(context, width, height, state.values.sharpness);
  }

  if (state.values.faceSlim > 0) {
    applyCenterSlim(context, width, height, state.values.faceSlim);
  }

  if (state.values.softGlow > 0) {
    applySoftGlow(context, canvas, state.values.softGlow);
  }

  if (state.styleMode !== 'none') {
    applyStyleGrade(context, width, height, state.styleMode);
  }

  if (state.grayscale) {
    applyGrayscale(context, width, height);
  }

  return canvas;
}

function createCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function applyPixelAdjustments(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const brightness = state.values.brightness * 2.1;
  const contrast = 1 + state.values.contrast / 100;
  const saturation = 1 + state.values.saturation / 100;

  for (let i = 0; i < data.length; i += 4) {
    let red = (data[i] - 128) * contrast + 128 + brightness;
    let green = (data[i + 1] - 128) * contrast + 128 + brightness;
    let blue = (data[i + 2] - 128) * contrast + 128 + brightness;

    const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
    red = luminance + (red - luminance) * saturation;
    green = luminance + (green - luminance) * saturation;
    blue = luminance + (blue - luminance) * saturation;

    data[i] = clamp(red);
    data[i + 1] = clamp(green);
    data[i + 2] = clamp(blue);
  }

  context.putImageData(imageData, 0, 0);
}

function applySkinWhitening(context, width, height, strength, skinMask) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const amount = strength / 100;

  for (let pixel = 0; pixel < skinMask.length; pixel += 1) {
    const mask = skinMask[pixel];
    if (mask <= 0.04) continue;

    const i = pixel * 4;
    let red = data[i];
    let green = data[i + 1];
    let blue = data[i + 2];
    const blend = amount * mask;

    red += (255 - red) * 0.28 * blend;
    green += (255 - green) * 0.25 * blend;
    blue += (255 - blue) * 0.2 * blend;

    const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
    red = luminance + (red - luminance) * (1 - blend * 0.16);
    green = luminance + (green - luminance) * (1 - blend * 0.16);
    blue = luminance + (blue - luminance) * (1 - blend * 0.16);

    data[i] = clamp(red);
    data[i + 1] = clamp(green);
    data[i + 2] = clamp(blue);
  }

  context.putImageData(imageData, 0, 0);
}

function applySmoothOverlay(context, sourceCanvas, skinSmooth, denoise, skinMask) {
  const blur = Math.max(0, skinSmooth / 22 + denoise / 35);
  const globalDenoiseAlpha = Math.min(0.18, denoise / 420);
  const skinSmoothAlpha = Math.min(0.62, skinSmooth / 125);
  if (blur <= 0 || globalDenoiseAlpha + skinSmoothAlpha <= 0) return;

  const overlay = createCanvas(sourceCanvas.width, sourceCanvas.height);
  const overlayContext = overlay.getContext('2d');
  overlayContext.filter = `blur(${blur}px)`;
  overlayContext.drawImage(sourceCanvas, 0, 0);

  const original = context.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
  const blurred = overlayContext.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);

  for (let pixel = 0; pixel < skinMask.length; pixel += 1) {
    const i = pixel * 4;
    const alpha = Math.min(0.7, globalDenoiseAlpha + skinSmoothAlpha * skinMask[pixel]);
    if (alpha <= 0.01) continue;

    original.data[i] = clamp(original.data[i] * (1 - alpha) + blurred.data[i] * alpha);
    original.data[i + 1] = clamp(original.data[i + 1] * (1 - alpha) + blurred.data[i + 1] * alpha);
    original.data[i + 2] = clamp(original.data[i + 2] * (1 - alpha) + blurred.data[i + 2] * alpha);
  }

  context.putImageData(original, 0, 0);
}

function buildSkinMask(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const mask = new Float32Array(width * height);

  for (let pixel = 0; pixel < mask.length; pixel += 1) {
    const i = pixel * 4;
    mask[pixel] = getSkinConfidence(data[i], data[i + 1], data[i + 2]);
  }

  return blurMask(mask, width, height, Math.max(2, Math.round(Math.min(width, height) / 180)), 2);
}

function getSkinConfidence(red, green, blue) {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const chroma = max - min;
  const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
  const cb = 128 - 0.168736 * red - 0.331264 * green + 0.5 * blue;
  const cr = 128 + 0.5 * red - 0.418688 * green - 0.081312 * blue;
  const hsv = rgbToHsv(red, green, blue);

  const rgbSkin =
    red > 45 &&
    green > 30 &&
    blue > 18 &&
    red >= blue &&
    green >= blue * 0.72 &&
    chroma > 10 &&
    luminance > 35;
  const ycbcrSkin = cb >= 74 && cb <= 145 && cr >= 128 && cr <= 188 && luminance > 38;
  const hueSkin = (hsv.h <= 52 || hsv.h >= 345) && hsv.s >= 0.08 && hsv.s <= 0.72 && hsv.v >= 0.18;
  const notWhiteDress = !(luminance > 218 && hsv.s < 0.16);
  const notDeepShadow = luminance > 28;

  if (!notWhiteDress || !notDeepShadow) {
    return 0;
  }

  const score = Number(rgbSkin) + Number(ycbcrSkin) + Number(hueSkin);
  if (score >= 3) return 1;
  if (score === 2) return 0.72;
  if (score === 1 && ycbcrSkin && chroma > 16) return 0.38;
  return 0;
}

function rgbToHsv(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === r) {
      hue = 60 * (((g - b) / delta) % 6);
    } else if (max === g) {
      hue = 60 * ((b - r) / delta + 2);
    } else {
      hue = 60 * ((r - g) / delta + 4);
    }
  }

  if (hue < 0) hue += 360;
  return {
    h: hue,
    s: max === 0 ? 0 : delta / max,
    v: max,
  };
}

function blurMask(mask, width, height, radius, passes) {
  let current = mask;
  for (let pass = 0; pass < passes; pass += 1) {
    const horizontal = new Float32Array(current.length);
    const output = new Float32Array(current.length);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        let total = 0;
        let count = 0;
        for (let offset = -radius; offset <= radius; offset += 1) {
          const sampleX = x + offset;
          if (sampleX < 0 || sampleX >= width) continue;
          total += current[y * width + sampleX];
          count += 1;
        }
        horizontal[y * width + x] = total / count;
      }
    }

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        let total = 0;
        let count = 0;
        for (let offset = -radius; offset <= radius; offset += 1) {
          const sampleY = y + offset;
          if (sampleY < 0 || sampleY >= height) continue;
          total += horizontal[sampleY * width + x];
          count += 1;
        }
        output[y * width + x] = Math.min(1, total / count);
      }
    }

    current = output;
  }

  return current;
}

function applySharpen(context, width, height, strength) {
  const original = context.getImageData(0, 0, width, height);
  const blurredCanvas = createCanvas(width, height);
  const blurredContext = blurredCanvas.getContext('2d');
  blurredContext.filter = 'blur(1.2px)';
  blurredContext.putImageData(original, 0, 0);
  blurredContext.drawImage(blurredCanvas, 0, 0);
  const blurred = blurredContext.getImageData(0, 0, width, height);
  const amount = strength / 85;

  for (let i = 0; i < original.data.length; i += 4) {
    original.data[i] = clamp(original.data[i] + (original.data[i] - blurred.data[i]) * amount);
    original.data[i + 1] = clamp(original.data[i + 1] + (original.data[i + 1] - blurred.data[i + 1]) * amount);
    original.data[i + 2] = clamp(original.data[i + 2] + (original.data[i + 2] - blurred.data[i + 2]) * amount);
  }

  context.putImageData(original, 0, 0);
}

function applyCenterSlim(context, width, height, strength) {
  const source = context.getImageData(0, 0, width, height);
  const output = context.createImageData(width, height);
  const centerX = width / 2;
  const centerY = height * 0.46;
  const radiusX = width * 0.28;
  const radiusY = height * 0.34;
  const slim = 0.18 * (strength / 100);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const dx = (x - centerX) / radiusX;
      const dy = (y - centerY) / radiusY;
      let sampleX = x;

      if (dx * dx + dy * dy < 1) {
        const weight = Math.max(0, (1 - dx * dx) * (1 - dy * dy));
        const shrink = Math.max(0.76, 1 - slim * weight);
        sampleX = centerX + (x - centerX) / shrink;
      }

      copyPixelBilinear(source, output, width, height, sampleX, y, x, y);
    }
  }

  context.putImageData(output, 0, 0);
}

function applySoftGlow(context, sourceCanvas, strength) {
  const factor = strength / 100;
  const glow = createCanvas(sourceCanvas.width, sourceCanvas.height);
  const glowContext = glow.getContext('2d');
  glowContext.filter = `blur(${8 + strength / 4}px) brightness(${1.04 + factor * 0.12})`;
  glowContext.drawImage(sourceCanvas, 0, 0);

  context.save();
  context.globalCompositeOperation = 'screen';
  context.globalAlpha = 0.16 + factor * 0.28;
  context.drawImage(glow, 0, 0);
  context.restore();
}

function applyGrayscale(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  context.putImageData(imageData, 0, 0);
}

function applyStyleGrade(context, width, height, styleMode) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const skin = getSkinConfidence(red, green, blue);
    const hsv = rgbToHsv(red, green, blue);
    const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
    let next = [red, green, blue];

    if (styleMode === 'blueSky') {
      next = gradeBlueSky(red, green, blue, hsv, luminance, skin);
    } else if (styleMode === 'cyanYouth') {
      next = gradeCyanYouth(red, green, blue, luminance, skin);
    } else if (styleMode === 'warmFilm') {
      next = gradeWarmFilm(red, green, blue, luminance, skin);
    } else if (styleMode === 'premiumGray') {
      next = gradePremiumGray(red, green, blue, luminance, skin);
    }

    data[i] = clamp(next[0]);
    data[i + 1] = clamp(next[1]);
    data[i + 2] = clamp(next[2]);
  }

  context.putImageData(imageData, 0, 0);
}

function gradeBlueSky(red, green, blue, hsv, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const skyMask = smoothstep(178, 235, hsv.h) * smoothstep(0.16, 0.5, hsv.s) * smoothstep(0.25, 0.9, hsv.v);
  const cloudMask = smoothstep(175, 245, luminance) * (1 - smoothstep(0.12, 0.32, hsv.s)) * (1 - skin);

  b += 34 * skyMask;
  g += 12 * skyMask;
  r -= 10 * skyMask;

  r += (255 - r) * 0.18 * cloudMask;
  g += (255 - g) * 0.18 * cloudMask;
  b += (255 - b) * 0.22 * cloudMask;

  if (skin > 0) {
    r += 5 * skin;
    g += 2 * skin;
    b -= 4 * skin;
  }

  return [r, g, b];
}

function gradeCyanYouth(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const shadow = 1 - smoothstep(80, 190, luminance);
  const nonSkin = 1 - skin * 0.75;

  r -= 8 * nonSkin;
  g += 12 * nonSkin + 7 * shadow;
  b += 10 * nonSkin + 12 * shadow;

  if (skin > 0) {
    r += 8 * skin;
    g += 4 * skin;
    b += 1 * skin;
  }

  return liftMidtones(r, g, b, 0.06);
}

function gradeWarmFilm(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const highlight = smoothstep(145, 245, luminance);
  const shadow = 1 - smoothstep(70, 180, luminance);

  r += 14 * highlight + 8 * skin;
  g += 6 * highlight + 3 * skin;
  b -= 10 * highlight;
  r += 5 * shadow;
  g += 2 * shadow;
  b += 8 * shadow;

  return liftMidtones(r, g, b, 0.035);
}

function gradePremiumGray(red, green, blue, luminance, skin) {
  let r = luminance + (red - luminance) * 0.72;
  let g = luminance + (green - luminance) * 0.72;
  let b = luminance + (blue - luminance) * 0.72;
  const contrast = 1.08;

  r = (r - 128) * contrast + 128;
  g = (g - 128) * contrast + 128;
  b = (b - 128) * contrast + 128 + 3;

  if (skin > 0) {
    r += 5 * skin;
    g += 2 * skin;
  }

  return [r, g, b];
}

function liftMidtones(red, green, blue, amount) {
  const lift = (value) => value + (255 - value) * amount * (1 - Math.abs(value - 128) / 160);
  return [lift(red), lift(green), lift(blue)];
}

function smoothstep(edge0, edge1, value) {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
}

function copyPixelBilinear(source, output, width, height, sx, sy, tx, ty) {
  const x = Math.max(0, Math.min(width - 1, sx));
  const y = Math.max(0, Math.min(height - 1, sy));
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = Math.min(width - 1, x0 + 1);
  const y1 = Math.min(height - 1, y0 + 1);
  const wx = x - x0;
  const wy = y - y0;
  const targetIndex = (ty * width + tx) * 4;

  for (let channel = 0; channel < 4; channel += 1) {
    const p00 = source.data[(y0 * width + x0) * 4 + channel];
    const p10 = source.data[(y0 * width + x1) * 4 + channel];
    const p01 = source.data[(y1 * width + x0) * 4 + channel];
    const p11 = source.data[(y1 * width + x1) * 4 + channel];
    output.data[targetIndex + channel] =
      p00 * (1 - wx) * (1 - wy) +
      p10 * wx * (1 - wy) +
      p01 * (1 - wx) * wy +
      p11 * wx * wy;
  }
}

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}

document.getElementById('openButton').addEventListener('click', openImage);
saveButton.addEventListener('click', saveImage);

document.querySelectorAll('[data-preset]').forEach((button) => {
  button.addEventListener('click', () => applyPreset(button.dataset.preset));
});

document.querySelectorAll('[data-style-preset]').forEach((button) => {
  button.addEventListener('click', () => applyStylePreset(button.dataset.stylePreset));
});

grayscaleToggle.addEventListener('change', () => {
  state.grayscale = grayscaleToggle.checked;
  schedulePreviewRender();
});

createControls();

window.addEventListener('resize', fitPreviewCanvasToContainer);

if ('ResizeObserver' in window) {
  const previewResizeObserver = new ResizeObserver(fitPreviewCanvasToContainer);
  previewResizeObserver.observe(canvasCard);
}
