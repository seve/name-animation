var holder = d3.select("#canvas");

holder.append('line')
.style('stroke', 'white')
.style('stroke-width', '16')
.attr('x1', 0)
  .attr('y1', 0)
  .attr('x2', window.outerWidth)
  .attr('y1', 0);
holder.append('line')
.style('stroke', 'black')
.style('stroke-width', '16')
.attr('x1', 0)
  .attr('y1', 16)
  .attr('x2', window.outerWidth)
  .attr('y2', 16);

