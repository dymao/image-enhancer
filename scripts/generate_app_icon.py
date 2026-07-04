from pathlib import Path
import shutil
import subprocess
import tempfile

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "assets"
RESOURCES_DIR = ROOT / "Image Enhancer.app" / "Contents" / "Resources"

ICON_SIZE = 1024
BLUE = (91, 140, 255)
PINK = (236, 72, 153)


def interpolate_color(start, end, amount):
    return tuple(round(start[index] * (1 - amount) + end[index] * amount) for index in range(3))


def load_font(size):
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def create_icon():
    icon = Image.new("RGBA", (ICON_SIZE, ICON_SIZE), (0, 0, 0, 0))
    gradient = Image.new("RGBA", (ICON_SIZE, ICON_SIZE))
    pixels = gradient.load()

    for y in range(ICON_SIZE):
        for x in range(ICON_SIZE):
            amount = (x + y) / (2 * (ICON_SIZE - 1))
            pixels[x, y] = (*interpolate_color(BLUE, PINK, amount), 255)

    mask = Image.new("L", (ICON_SIZE, ICON_SIZE), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, ICON_SIZE - 1, ICON_SIZE - 1),
        radius=220,
        fill=255,
    )

    shadow = Image.new("RGBA", (ICON_SIZE, ICON_SIZE), (0, 0, 0, 0))
    shadow_mask = Image.new("L", (ICON_SIZE, ICON_SIZE), 0)
    ImageDraw.Draw(shadow_mask).rounded_rectangle(
        (42, 52, ICON_SIZE - 42, ICON_SIZE - 32),
        radius=220,
        fill=145,
    )
    shadow.putalpha(shadow_mask.filter(ImageFilter.GaussianBlur(42)))
    icon.alpha_composite(shadow)
    icon.alpha_composite(Image.composite(gradient, Image.new("RGBA", icon.size), mask))

    highlight = Image.new("RGBA", icon.size, (255, 255, 255, 0))
    highlight_mask = Image.new("L", icon.size, 0)
    ImageDraw.Draw(highlight_mask).ellipse((-260, -360, 900, 520), fill=65)
    highlight.putalpha(highlight_mask.filter(ImageFilter.GaussianBlur(12)))
    icon.alpha_composite(highlight)

    draw = ImageDraw.Draw(icon)
    font = load_font(620)
    bbox = draw.textbbox((0, 0), "M", font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    text_x = (ICON_SIZE - text_width) / 2 - bbox[0]
    text_y = (ICON_SIZE - text_height) / 2 - bbox[1] - 24
    draw.text((text_x + 14, text_y + 18), "M", font=font, fill=(30, 41, 59, 80))
    draw.text((text_x, text_y), "M", font=font, fill=(255, 255, 255, 255))
    return icon


def write_iconset(icon, iconset_dir):
    icon_specs = [
        ("icon_16x16.png", 16),
        ("icon_16x16@2x.png", 32),
        ("icon_32x32.png", 32),
        ("icon_32x32@2x.png", 64),
        ("icon_128x128.png", 128),
        ("icon_128x128@2x.png", 256),
        ("icon_256x256.png", 256),
        ("icon_256x256@2x.png", 512),
        ("icon_512x512.png", 512),
        ("icon_512x512@2x.png", 1024),
    ]
    for filename, size in icon_specs:
        icon.resize((size, size), Image.Resampling.LANCZOS).save(iconset_dir / filename)


def main():
    ASSETS_DIR.mkdir(exist_ok=True)
    RESOURCES_DIR.mkdir(parents=True, exist_ok=True)

    icon = create_icon()
    icon.save(ASSETS_DIR / "app-icon.png")
    icon.save(
        ASSETS_DIR / "app-icon.ico",
        sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )

    iconutil = shutil.which("iconutil")
    with tempfile.TemporaryDirectory() as tmpdir:
        iconset_dir = Path(tmpdir) / "AppIcon.iconset"
        iconset_dir.mkdir()
        write_iconset(icon, iconset_dir)
        if iconutil:
            subprocess.run(
                [iconutil, "-c", "icns", str(iconset_dir), "-o", str(RESOURCES_DIR / "AppIcon.icns")],
                check=True,
            )
        else:
            icon.save(RESOURCES_DIR / "AppIcon.icns")


if __name__ == "__main__":
    main()
