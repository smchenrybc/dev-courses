/**
 * index.js
 */

// set var
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500,
    svgHeight = 300,
    barPadding = 5;
let barWidth = (svgWidth / dataset.length);

let svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

let barChart = svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - d;
  })
  .attr("height", function(d) {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function(d, i) {
    let translate = [barWidth * i, 0];
    //  return "translate("+ translate +")";
    return `translate(${translate})`;
  });

let text = svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr("y", function(d, i) {
    return svgHeight - d - 5;
  })
  .attr("x", function(d, i) {
    return ( (barWidth * i) + 2);
  })
  .attr("fill", 'rebeccapurple');
