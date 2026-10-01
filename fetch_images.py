import json, os, ssl, struct, time, urllib.parse, urllib.request

OUT = os.path.dirname(os.path.abspath(__file__)) + "/public/assets"
API = "https://commons.wikimedia.org/w/api.php"
UA = "MoonRiverConstructionSite/1.0 (https://moonriverconstruction.com; site build)"
ctx = ssl.create_default_context()

# license value (lowercased) -> needs attribution?
NO_ATTRIB = {"cc0", "pd", "pdm", "cc-pd"}
ATTRIB_OK_PREFIX = ("cc-by",)  # cc-by, cc-by-sa, cc-by-2.0, etc.

JOBS = {
    "photo-driveway":       ["concrete driveway house", "asphalt driveway"],
    "photo-retaining-wall": ["retaining wall garden", "stone retaining wall"],
    "photo-deck":           ["wooden deck house backyard", "patio deck"],
    "photo-landscaping":    ["landscaped garden yard", "residential landscaping"],
    "photo-turf":           ["artificial turf lawn", "synthetic grass"],
    "photo-fence":          ["wooden fence backyard", "privacy fence"],
    "photo-excavation":     ["excavator construction site", "excavation digging"],
    "photo-kitchen":        ["modern kitchen interior", "remodeled kitchen"],
    "photo-bathroom":       ["modern bathroom interior", "remodeled bathroom"],
    "photo-basement":       ["finished basement room", "basement family room"],
    "photo-painting":       ["painting interior wall roller", "house painter wall"],
    "photo-flooring":       ["hardwood floor installation", "wood flooring room"],
    "photo-drywall":        ["drywall installation construction", "plasterboard wall"],
    "photo-carpentry":      ["finish carpentry trim wood", "carpenter woodworking"],
}

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=45, context=ctx) as r:
        return r.read(), r.headers

def search(query):
    qs = urllib.parse.urlencode({
        "action": "query", "format": "json", "generator": "search",
        "gsrnamespace": 6, "gsrsearch": query, "gsrlimit": 25,
        "prop": "imageinfo", "iiprop": "url|mime|size|extmetadata", "iiurlwidth": 1280,
    })
    raw, _ = get(API + "?" + qs)
    data = json.loads(raw)
    pages = list(data.get("query", {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 999))
    return pages

def jpeg_dims(b):
    try:
        i, n = 2, len(b)
        while i < n:
            if b[i] != 0xFF: return None
            m = b[i+1]; i += 2
            if 0xC0 <= m <= 0xCF and m not in (0xC4, 0xC8, 0xCC):
                h, w = struct.unpack(">HH", b[i+3:i+7]); return (w, h)
            i += struct.unpack(">H", b[i:i+2])[0]
    except Exception:
        return None
    return None

def pick(pages):
    """Return (info, license, needs_attrib) preferring no-attribution licenses."""
    fallback = None
    for p in pages:
        ii = p.get("imageinfo", [{}])[0]
        if ii.get("mime") != "image/jpeg" or not ii.get("thumbwidth"):
            continue
        if (ii.get("thumbwidth", 0) < 800):
            continue
        lic = (ii.get("extmetadata", {}).get("License", {}).get("value") or "").lower()
        if lic in NO_ATTRIB:
            return p, ii, lic, False
        if fallback is None and lic.startswith(ATTRIB_OK_PREFIX):
            fallback = (p, ii, lic, True)
    return (*fallback,) if fallback else (None, None, None, None)

credits = []
for name, queries in JOBS.items():
    done = False
    for q in queries:
        try:
            time.sleep(3)
            pages = search(q)
        except Exception as e:
            print(f"{name}: search error '{q}': {e}"); continue
        page, ii, lic, attrib = pick(pages)
        if not ii:
            continue
        try:
            time.sleep(2)
            b, hdr = get(ii["thumburl"])
        except Exception as e:
            print(f"{name}: dl error: {e}"); continue
        if len(b) < 25000 or b[:2] != b"\xff\xd8":
            continue
        with open(f"{OUT}/{name}.jpg", "wb") as f:
            f.write(b)
        d = jpeg_dims(b)
        print(f"{name}.jpg <- [{q}] {len(b)//1024}KB {d} lic={lic}{' (ATTRIB)' if attrib else ''}")
        if attrib:
            em = ii.get("extmetadata", {})
            artist = (em.get("Artist", {}).get("value") or "Unknown").replace("\n", " ")
            credits.append(f"- {name}.jpg — {lic} — {artist} — {page.get('title','')}")
        done = True
        break
    if not done:
        print(f"!! {name}: NO IMAGE FOUND")

if credits:
    with open(f"{OUT}/../../IMAGE-CREDITS.md", "w", encoding="utf-8") as f:
        f.write("# Image Credits\n\nImages requiring attribution (from Wikimedia Commons):\n\n")
        f.write("\n".join(credits) + "\n")
    print(f"\nWrote IMAGE-CREDITS.md ({len(credits)} attributed)")
