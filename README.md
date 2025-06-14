# EcoPulse

EcoPulse is a single-page website that surfaces key environmental data and encourages direct action. It combines quick facts, embeddable maps, and a simple heatmap visualization so visitors can see how our planet is doing at a glance.

## Quick Start

1. Clone or download this repository.
2. Open `index.html` in your browser. No build step is required.
3. Replace the placeholder `YOUR_AIRNOW_API_KEY` in `index.html` if you want live air quality data.

```
# Example using Python to serve locally
python3 -m http.server
```
Then visit <http://localhost:8000/>.

## Features

- **Dashboard Cards** – Four cards provide snapshots of climate trends, forest loss, ocean pollution, and local air quality. The climate and forests cards embed third-party interactive maps, while the oceans card uses a static infographic. Air quality is fetched via the AirNow API and displayed with a small heatmap rendered by D3.
- **Hero Video** – A looping video sets the tone behind the main headline, "One Earth. One Choice." and a button to jump to the dashboard.
- **Action Center** – Lists lifestyle tips, volunteer links, and recommended organizations so visitors can make an impact today.
- **About Section** – Describes the mission of EcoPulse and credits data sources for each card.

## Directory Structure

```
EcoPulse/
├── assets/                # Videos and heatmap data
│   ├── earthpanover.mp4
│   ├── naturePanOver.mp4
│   └── pollution_by_zip.json
├── index.html             # Page markup and JavaScript
├── style.css              # Styles and layout rules
├── main.js                # Heatmap rendering code
└── README.md
```

## Contributing

Pull requests are welcome for bug fixes or feature improvements. Please include clear descriptions and code comments explaining the intent of your changes.

## License

Released under the MIT License.
