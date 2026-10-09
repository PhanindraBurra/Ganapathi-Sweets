# Sri Ganapathi Sweet House (శ్రీ గణపతి స్వీట్ హౌస్) - Amalapuram

A production-quality, fully responsive website for **Sri Ganapathi Sweet House**, located near Clock Tower / RTC Bus Stand, Main Road, Amalapuram, Andhra Pradesh.

---

## ✨ Features

- **Divine Ganapathi Intro Splash Screen:** Full-screen animation featuring Lord Ganapati with rotating sacred mandala, floating marigold petals, swinging brass diyas, and audio/visual entrance with skip option (stored via `sessionStorage`).
- **Data-Driven Architecture:** All shop details, contact numbers, hours, products, and Google reviews are centralized in `/data/shop.json`.
- **Festive Sweet Shop Saffron Theme:** Harmonious light pastel palette matching the handcrafted vector logo (`logo.svg`).
- **Interactive Sweet Animations:**
  - 18 floating sweet elements (Motichoor Laddu, Saffron Jangri, Madatha Kaja, Ganapati Modak, Kaju Katli, Gulab Jamun, rose & marigold petals, starbursts) drifting in continuous background parallax.
  - Sweet-specific card micro-animations (bouncing laddu, swirling jangri, wobbling jamun, crystalline pootharekulu shimmer).
  - Ambient golden light waves and interactive click sparkle particle bursts.
- **Hero Carousel:** High-resolution sweet showcase with autoplay, pause-on-hover, arrow controls, and touch swipe gestures.
- **WhatsApp Direct Ordering:** One-tap order buttons on each sweet pre-filling product name, Telugu name, and pricing directly to WhatsApp (+91 99858 27779).
- **Live Open/Closed Status:** Automatically computes real-time opening hours based on device clock (8:00 AM – 10:00 PM daily).
- **Gallery & Reviews:** Moving photo marquee with full-size interactive lightbox modal and verified Google customer reviews.
- **Mobile-First Responsive Design:** Fully optimized across mobile (360px, 390px), tablet (768px, 1024px), and desktop (1440px+).

---

## 📁 Project Structure

```text
├── assets/
│   ├── icons/            # SVG vector logo, favicons, sweet icons, Lord Ganapati illustration
│   └── images/           # Optimized WebP photography (Kaja, Pootharekulu, Laddu, Mysore Pak, etc.)
├── css/
│   ├── variables.css     # Design tokens and color variables
│   ├── main.css          # Core layouts, typography, header, hero, and sweet animations
│   ├── intro.css         # Divine splash screen animation physics
│   └── responsive.css    # Mobile-first breakpoint queries & touch optimizations
├── data/
│   └── shop.json         # Single source of truth for store info, sweets catalog, and reviews
├── js/
│   ├── app.js            # Main controller, data loader, category filter, and sparkle interactions
│   ├── intro.js          # Splash screen session manager & petal particle system
│   ├── slider.js         # Touch-enabled hero carousel slider
│   └── shop-data.js      # Offline fallback data bridge
├── index.html            # Semantic HTML5 with LocalBusiness JSON-LD schema & Open Graph tags
└── README.md
```

---

## 🚀 Running Locally

You can serve the website using any static HTTP server:

### Using Python:
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

### Using Node.js:
```bash
npx serve .
```

---

## ⚙️ How to Edit Details

All shop data is editable in [`/data/shop.json`](data/shop.json):
1. **Phone Numbers & WhatsApp:** Edit `shop.phones` and `shop.whatsapp.number`.
2. **Shop Timings:** Edit `shop.timing.openHour` and `shop.timing.closeHour`.
3. **Sweets Menu:** Add or modify sweets in the `sweets` array (`name`, `teluguName`, `price`, `description`, `badge`, `category`).
4. **Photos:** Add your own photos to `/assets/images/` using the matching filenames to replace placeholders.
