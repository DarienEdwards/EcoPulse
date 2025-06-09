# EcoPulse

EcoPulse is a lightweight static website that highlights key environmental metrics
and provides actions that visitors can take to make a difference. The project is
composed of three primary files:

- `index.html` – page markup and embedded data widgets
- `style.css` – styles and responsive layout rules
- `main.js` – D3 script that draws a pollution heatmap using local data

Additional media and data reside in the `assets` directory.

## Features

### Dashboard Cards
Four cards show quick facts about climate, forest loss, ocean plastic pollution,
and local air quality. The climate and forests sections embed interactive maps
from third‑party sources. The oceans card displays a static infographic, while
the air quality card fetches live data from the AirNow API and shows a heatmap of
pollution by ZIP code.

### Hero Video
A looping video plays in the background of the hero section to set the tone of
the site. A prominent "Start Tracking" button jumps directly to the dashboard
cards.

### Take Action
Below the data widgets, visitors can find lifestyle tips, volunteer links, and
trusted organizations for donations. These pointers aim to encourage tangible
changes beyond simply viewing data.

### About Section
The about section explains the mission of EcoPulse and lists the primary data
sources used throughout the page:

- Climate data: [ClimateChangeTracker.org](https://climatechangetracker.org)
- Forests: [GlobalForestWatch.org](https://www.globalforestwatch.org)
- Oceans: [TheOceanCleanup.com](https://theoceancleanup.com) and
  [AquaLink.org](https://aqualink.org/map)
- Air quality: [WAQI.info](https://waqi.info)

## AirNow API Key
Live AQI readings come from the AirNow API. To enable this feature, replace the
placeholder value `YOUR_AIRNOW_API_KEY` in `index.html` with a valid API key from
[AirNow.gov](https://www.airnow.gov/).

## Running Locally
No build tools are required. Simply open `index.html` in any modern browser. If
serving from a local HTTP server, the heatmap and API request will run without
CORS issues.

```
# Example using Python's built‑in server
python3 -m http.server
```

Then visit `http://localhost:8000/` in your browser.

## Directory Structure
```
EcoPulse/
├── assets/
│   ├── earthpanover.mp4
│   ├── naturePanOver.mp4
│   └── pollution_by_zip.json
├── index.html
├── main.js
├── style.css
└── README.md
```

## Contributing
Pull requests are welcome for bug fixes or feature improvements. Please include
clear descriptions and, when relevant, code comments explaining the intent of
your changes.

## License
This project is released under the MIT License.
