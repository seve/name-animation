const holder = d3.select("#canvas");

const numOfGroups = 3 * window.outerHeight / 16 ;

const lines = []

let y = 0;
let color

for(let i = 0; i < numOfGroups; i += 1) {
  switch (i % 3){
    case 0:
      color = 'white';
      break;
    case 1:
      color = 'black';
      break;
    case 2:
      color = 'rgba(0,0,0,0)';
      break;
    default:
      break;
  }

lines.push(holder.append('line')
  .style('stroke', color)
  .style('stroke-width', '16')
  .attr('x1', 0)
  .attr('y1', y)
  .attr('x2', window.outerWidth)
  .attr('y2', y));

  y+= 16;


}



