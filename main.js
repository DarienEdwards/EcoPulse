const { useEffect } = React;

const co2Data = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'CO2 ppm',
      data: [404, 406, 408, 411, 414, 417, 420, 422],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};

const pmData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'PM2.5 \u00b5g/m\u00b3',
      data: [12, 11, 13, 15, 18, 20, 22, 21, 18, 16, 14, 13],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};

const oceanData = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Ocean Plastic (million tons)',
      data: [8, 8.3, 8.7, 9, 9.5, 10, 10.6, 11.2],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};

function DashboardCharts() {
  useEffect(() => {
    new Chart(document.getElementById('co2Chart').getContext('2d'), {
      type: 'line',
      data: co2Data,
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(document.getElementById('pmChart').getContext('2d'), {
      type: 'line',
      data: pmData,
      options: { responsive: true, maintainAspectRatio: false }
    });

    new Chart(document.getElementById('oceanChart').getContext('2d'), {
      type: 'line',
      data: oceanData,
      options: { responsive: true, maintainAspectRatio: false }
    });
  }, []);

  return (
    <div className="charts">
      <div className="chart-container">
        <h3>Atmospheric CO2 (ppm)</h3>
        <canvas id="co2Chart"></canvas>
      </div>
      <div className="chart-container">
        <h3>PM2.5 (µg/m³)</h3>
        <canvas id="pmChart"></canvas>
      </div>
      <div className="chart-container">
        <h3>Ocean Plastic Waste (million tons)</h3>
        <canvas id="oceanChart"></canvas>
      </div>
    </div>
  );
}

ReactDOM.render(<DashboardCharts />, document.getElementById('react-dashboard'));

