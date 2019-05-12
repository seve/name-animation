const canvas = d3.select("#canvas");

const allLines = [];

const SIZE = 8;

const numOfGroups = 3 * window.outerHeight / SIZE ;

const lines = []

const mouseG = canvas.append('g')
.attr('class', 'mouse-over-effects');

let y = - window.outerHeight;
let color;
const height = Number(window.outerHeight)
const repeat = (elem, y) => {
  const thisY = y;
  
  elem.attr('x1', 0)
  .attr('y1', thisY)
  .attr('x2', window.outerWidth)
  .attr('y2', thisY)
  .transition()
  .duration(8000)

  .attr('y1', height + thisY)
  .attr('y2', height + thisY)
  .ease(d3.easeLinear)
  .on('end', () => {
    repeat(elem, thisY);
  })
}

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

  const elem = canvas.append('line')
  .style('stroke', color)
  .style('stroke-width', SIZE);

  repeat(elem, y);

  allLines.push(elem);

  y += SIZE;


}



