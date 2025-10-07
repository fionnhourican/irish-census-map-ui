import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export default function D3MapVisualization({ onTownlandClick }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const loadD3 = async () => {
      if (!window.d3) {
        const d3Script = document.createElement('script');
        d3Script.src = 'https://d3js.org/d3.v7.min.js';
        document.head.appendChild(d3Script);
        await new Promise(resolve => d3Script.onload = resolve);
      }

      const svg = window.d3.select(svgRef.current);
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;

      svg.selectAll("*").remove();
      window.d3.selectAll('.tooltip').remove();

      try {
        const data = await window.d3.json('/Example5.json');
        
        const projection = window.d3.geoMercator()
          .fitSize([width, height], data);
        
        const path = window.d3.geoPath().projection(projection);

        const colorScale = window.d3.scaleSequential()
          .domain([0, window.d3.max(data.features, d => d.properties.population_count)])
          .interpolator(window.d3.interpolateYlOrRd);

        const tooltip = window.d3.select('body').append('div')
          .attr('class', 'tooltip')
          .style('position', 'absolute')
          .style('background', 'rgba(0,0,0,0.8)')
          .style('color', 'white')
          .style('padding', '8px')
          .style('border-radius', '4px')
          .style('pointer-events', 'none')
          .style('opacity', 0);

        svg.selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('fill', d => colorScale(d.properties.population_count))
          .attr('stroke', '#666666')
          .attr('stroke-width', 0.8)
          .style('cursor', 'pointer')
          .on('mouseover', function(event, d) {
            tooltip.transition().duration(200).style('opacity', 1);
            tooltip.html(`
              <strong>${d.properties.ENG_NAME_VALUE}</strong><br>
              Irish: ${d.properties.IRISH_NAME_VALUE}<br>
              Population: ${d.properties.population_count}
            `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
          })
          .on('mouseout', function() {
            tooltip.transition().duration(500).style('opacity', 0);
          })
          .on('click', function(event, d) {
            tooltip.style('opacity', 0);
            onTownlandClick(d.properties);
          });

      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadD3();
  }, [onTownlandClick]);

  return (
    <Box sx={{ flex: 1 }}>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
}