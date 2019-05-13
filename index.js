const canvas = d3.select("#canvas");
const group = canvas.append("g")

const allLines = [];

const SIZE = 8;

const numOfGroups = 15 * window.outerHeight / SIZE;

const lines = []

let y = -7 * window.outerHeight;
let color;
const height = Number(window.outerHeight)
const repeat = (elem, y) => {
  const thisY = y;

  elem.attr('x1', 0)
    .attr('y1', thisY)
    .attr('x2', window.outerWidth)
    .attr('y2', thisY)
    .transition()
    .duration(9500)

    .attr('y1', height + thisY)
    .attr('y2', height + thisY)
    .ease(d3.easeLinear)
    .on('end', () => {
      repeat(elem, thisY);
    })
}

for (let i = 0; i < numOfGroups; i += 1) {
  switch (i % 3) {
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

  const elem = group.append('line')
    .attr('theY', y)
    .style('stroke', color)
    .style('stroke-width', SIZE)
  // .on('mouseover', () => {console.log('mouse');
  // });

  repeat(elem, y);

  allLines.push(elem);

  y += SIZE;
}


canvas.append('rect')
  .on('mouseover', () => {
    group.selectAll('*').interrupt();
    console.log('mouse over');

  })
  .on('mouseout', () => {
    console.log('mouse out');
    allLines.forEach(elem => repeat(elem, Number(elem.attr('y2'))))
  })
  .on('mousemove', () => {
    const mouse = d3.mouse(d3.event.currentTarget);
    group.attr('transform', `translate3D(0, ${mouse[1] / 6}, 0)`)
  })
  .raise()
  .attr('width', window.outerWidth)
  .attr('height', window.outerHeight)
  .attr('fill', 'none')
  .attr('pointer-events', 'all')



