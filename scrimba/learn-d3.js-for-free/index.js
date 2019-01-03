/**
 * index.js
 */

// dataset
let dataset = [1, 2, 3, 4, 5];

// other vars
let svgWidth = 500,
    svgHeight = 300,
    barPadding = 5;
let barWidth = (svgWidth / dataset.length);

// set SVG size:
let svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// scale
let yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgHeight - 5]);

// bars
let barChart = svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - yScale(d);
  })
  .attr("height", function(d) {
    return yScale(d);
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function(d, i) {
    let translate = [barWidth * i, 0];
    //  return "translate("+ translate +")";
    return `translate(${translate})`;
  })
  .attr("fill", "#333");
