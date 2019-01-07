/**
 * index.js
 */

// dataset
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// other vars
let svgWidth = 500,
    svgHeight = 300,
    barPadding = 5;
let barWidth = (svgWidth / dataset.length);

// set SVG size:
let svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// x scale
let xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgWidth - 5]);

// y scale
let yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([svgHeight - 5, 0]);

// axis vars
let x_axis = d3.axisBottom().scale(xScale);
let y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
  .attr("transform", "translate(50, 10)")
  .call(y_axis);

let xAxisTranslate = svgHeight - 20;

svg.append("g")
  .attr("transform", `translate(50, ${xAxisTranslate})`)
  .call(x_axis);
