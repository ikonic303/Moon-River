import os
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(ROOT, "public")
NAVY = (16, 34, 50, 255)  # #102232

def rounded_square(size, radius_ratio=0.22, bg=NAVY):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = int(size * radius_ratio)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=bg)
    return img

def compose(size, mark, pad_ratio=0.20):
    canvas = rounded_square(size)
    # scale mark to fit within (1 - 2*pad) box by height
    box = int(size * (1 - 2 * pad_ratio))
    mw, mh = mark.size
    scale = box / mh
    nw, nh = max(1, int(mw * scale)), max(1, int(mh * scale))
    m = mark.resize((nw, nh), Image.LANCZOS)
    x = (size - nw) // 2
    y = (size - nh) // 2
    canvas.alpha_composite(m, (x, y))
    return canvas

mark = Image.open(os.path.join(PUB, "assets", "logo-icon-white.png")).convert("RGBA")

# master + derivatives
master = compose(512, mark)
master.save(os.path.join(PUB, "favicon-512.png"))
compose(180, mark).save(os.path.join(PUB, "apple-touch-icon.png"))
master.resize((32, 32), Image.LANCZOS).save(os.path.join(PUB, "favicon-32.png"))
master.resize((16, 16), Image.LANCZOS).save(os.path.join(PUB, "favicon-16.png"))

# multi-resolution .ico
master.save(os.path.join(PUB, "favicon.ico"),
            sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

print("favicon assets written to public/:")
for f in ["favicon.ico", "favicon-16.png", "favicon-32.png", "favicon-512.png", "apple-touch-icon.png"]:
    p = os.path.join(PUB, f)
    print(f"  {f}  {os.path.getsize(p)//1024 or 1}KB")
