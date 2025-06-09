// Placeholder simulation for real-time data
// Move from index.html

document.getElementById("temp-rise").innerText = "+1.2°C";
document.getElementById("forest-loss").innerText = "3.1M ha in 2024";
document.getElementById("aqi").innerText = "142 (Unhealthy)";
document.getElementById("oceanPlastic").innerText = '1.6 million km2';

const apiKey = 'YOUR_AIRNOW_API_KEY'; // Get your free API key from AirNow.gov
const zipCode = '20001'; // Washington DC ZIP

async function fetchAirNowAQI() {
  try {
    const res = await fetch(`https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipCode}&distance=25&API_KEY=${apiKey}`);
    const data = await res.json();

    if (data.length > 0) {
      const aqi = data[0].AQI;
      const category = data[0].Category.Name;
      document.getElementById('aqi').innerText = `${aqi} (${category})`;
    } else {
      document.getElementById('aqi').innerText = 'Unavailable';
    }
  } catch (err) {
    console.error('AirNow API error:', err);
    document.getElementById('aqi').innerText = 'Error fetching data';
  }
}

fetchAirNowAQI();

