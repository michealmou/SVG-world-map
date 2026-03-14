# 🌍 SVG World Map Explorer

An interactive, fully-featured world map built with vanilla HTML, CSS, and JavaScript. Click any country to view comprehensive details including flag, capital, population, region, and area — all powered by the [REST Countries API](https://restcountries.com).

## ✨ Features

### Map Interactivity
- **Click-to-explore** — select any country (including territories) to open a side panel with detailed information
- **Hover effects** — countries highlight smoothly on mouseover with color transitions
- **All countries supported** — including territories marked with `class` attributes, no missing countries
- **Smooth animations** — cascading fade-ins with staggered timing for all displayed data

### Data Display
- **Complete country info** — flag, capital, population, region, and area
- **Live data** — fetched from REST Countries API (cached on load for fast access)
- **Population formatting** — localized number formatting for readability
- **Dynamic descriptions** — auto-generated country location summaries

### Navigation & Controls
- **Zoom in/out** — 5 levels of zoom (0.5x to 5x) with smooth scaling
- **Pan support** — drag the map when zoomed in to explore regions
- **Responsive side panel** — slides in from the right with backdrop overlay
- **Quick close** — close button with rotation animation, or click backdrop

### Visual Polish
- **Smooth transitions** — all animations use cubic-bezier easing for natural motion
- **Backdrop overlay** — semi-transparent overlay when panel is open
- **Interactive buttons** — zoom and close buttons respond to hover/click with scale effects
- **Flag images** — countries displayed with their official flag

## 🚀 Getting Started

No build tools or dependencies required. Just open the file in a browser:
```bash
# Clone the repo
git clone https://github.com/your-username/svg-world-map.git
cd svg-world-map

# Open in browser
open index.html
```

Or simply drag `index.html` into any modern browser.

## 📁 Project Structure
```
├── index.html   # SVG map markup + side panel UI
├── styles.css   # Layout, panel, hover, and control styles
└── script.js    # Country click logic, API calls, zoom controls
```

## 🛠️ Built With

- **Vanilla JavaScript** — no frameworks, no dependencies
- **REST Countries API v3.1** — free, no API key required
- **Pure CSS animations** — keyframes for smooth transitions
- **Inline SVG** — per-country `<path>` elements with proper name/class attributes

## 📊 Data Fields Displayed

When you click a country, the side panel shows:
- **Country Name** — common name from API
- **Flag** — official country flag image
- **Area** — land area in km²
- **Capital** — primary capital city
- **Population** — total population (formatted with thousands separators)
- **Region** — geographic region (Africa, Europe, Asia, etc.)
- **Description** — auto-generated location summary

## 🎮 How to Use

1. **Browse the map** — scroll and view the interactive SVG world
2. **Click any country** — the name appears in panel on hover, click to view details
3. **Zoom in** — click the `+` button to zoom up to 5x for detailed exploration
4. **Pan around** — when zoomed in, drag the map to navigate
5. **Zoom out** — click the `−` button to zoom out; full reset at 1x
6. **View details** — flag and info cascade in smoothly with staggered animations
7. **Close panel** — click the `×` button or click the dark overlay

## ➕ Adding Custom Country Data

Want to add local/custom data? See [CUSTOM_DATA_GUIDE.txt](CUSTOM_DATA_GUIDE.txt) for three approaches:
1. Override API response data in real-time
2. Load a JSON file with custom fields
3. Use browser localStorage for user-added data

All approaches are documented with implementation examples.

## ✅ Recent Improvements

- **Fixed all countries** — territories now display properly using `class` attribute fallback
- **Added missing fields** — population, region, description now show in side panel
- **Enhanced animations** — smooth slide-in panel with backdrop and cascading content
- **Improved buttons** — zoom controls and close button with interactive effects
- **Better CSS organization** — centralized variables and clearer structure
- **Complete API integration** — all REST Countries fields properly cached and displayed

## 📱 Browser Support

Works on all modern browsers supporting:
- ES6+ JavaScript
- CSS Grid/Flexbox
- CSS Transforms & Animations
- Fetch API
- SVG

Tested on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 🤝 Contributing

Pull requests welcome! Areas for enhancement:
- Mobile responsiveness (touch gestures)
- Additional country data (currencies, languages, timezones)
- Search/filter functionality
- Click-to-copy country stats
- Export/screenshot features
- Dark mode

## 📝 License

MIT