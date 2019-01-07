/**
 * index.js
 */

var svgWidth = 600,
    svgHeight = 500;

var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container")

var line = svg.append("line")
    .attr("x1", 75)
    .attr("x2", 500)
    .attr("y1", 50)
    .attr("y2", 50)
    .attr("stroke", "red")
    .attr("stroke-width", 5)

var rect = svg.append("rect")
    .attr("x", 75)
    .attr("y", 100)
    .attr("width", 200)
    .attr("height", 100)
    .attr("fill", "#9B95FF")

var circle = svg.append("circle")
    .attr("cx", 150)
    .attr("cy", 320)
    .attr("r", 80)
    .attr("fill", "#7CE8D5")
