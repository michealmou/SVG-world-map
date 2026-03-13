# SVG-world-map
# 🌍 SVG World Map Explorer

An interactive world map built with vanilla HTML, CSS, and JavaScript. Click any country to instantly view its flag, capital, and area — powered by the [REST Countries API](https://restcountries.com).

## ✨ Features

- **Click-to-explore** — select any country to open a side panel with details
- **Live data** — flag, capital city, and area fetched from REST Countries API
- **Hover effects** — countries highlight on mouseover
- **Zoom controls** — zoom in/out buttons to navigate the map
- **Fast lookups** — all country data is preloaded on page start

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

- Vanilla JavaScript (no frameworks)
- [REST Countries API](https://restcountries.com/v3.1/) — free, no key required
- Inline SVG world map with per-country `<path>` elements

## ⚠️ Known Issues

- Zoom controls have a scoping bug — the inner `addEventListener` is nested inside the outer one and the closing brace for `zoomin` is missing. Zoom currently only logs to console.
- Some territories/islands use `class` instead of `id` on their `<path>` elements, so clicking them won't populate the side panel.

## 🤝 Contributing

Pull requests welcome! If you'd like to fix the zoom bug, improve mobile responsiveness, or add more country details (population, currency, languages), feel free to open an issue or PR.

## 📜 License

MIT