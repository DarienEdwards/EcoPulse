// Render pollution heatmap using D3
async function drawHeatmap() {
  try {
    const data = await d3.json('assets/pollution_by_zip.json');

    const container = document.getElementById('heatmap');
    const containerWidth = container.clientWidth;
    d3.select(container).select('svg').remove();
    const columns = Math.ceil(Math.sqrt(data.length));
    const gridSize = Math.floor(containerWidth / columns);
    const rows = Math.ceil(data.length / columns);

    const width = columns * gridSize;
    const height = rows * gridSize;

    const svg = d3
      .select('#heatmap')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('role', 'img')
      .attr('aria-label', 'Pollution heatmap by ZIP code');

    const colorScale = d3
      .scaleSequential()
      .domain([0, d3.max(data, (d) => d.pollution)])
      .interpolator(d3.interpolateYlOrRd);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_d, i) => (i % columns) * gridSize)
      .attr('y', (_d, i) => Math.floor(i / columns) * gridSize)
      .attr('width', gridSize)
      .attr('height', gridSize)
      .attr('fill', (d) => colorScale(d.pollution))
      .attr('tabindex', 0)
      .append('title')
      .text((d) => `ZIP ${d.zip}: ${d.pollution}`);

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (_d, i) => (i % columns) * gridSize + gridSize / 2)
      .attr('y', (_d, i) => Math.floor(i / columns) * gridSize + gridSize / 2)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .attr('font-size', '10px')
      .text((d) => d.zip);
  } catch (err) {
    console.error('Error loading heatmap data:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  drawHeatmap();
  window.addEventListener('resize', drawHeatmap);
});
