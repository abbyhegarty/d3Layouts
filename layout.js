var dataset = [10,20,30,40,50,60,70,80,90,100];

var color = d3.scaleOrdinal(d3.schemeCategory10);

//define the functions to get the right data format
var pie = d3.pie(); 

var width = 400;
var height = 400;
var outerRadius= width/2
var innerRadius = 50;

var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);


var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


var arcs = svg.selectAll("g.arc")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("transform", "translate("+ outerRadius +","+outerRadius+")");


arcs.append("path")
        .attr("fill", function(d,i) { return color(i);})
        .attr("d",arc);


arcs.append("text")
        .attr("transform", function(d)
             {return "translate("+arc.centroid(d)+")";
             })
        .attr("text-anchor","middle")
        .text(function(d){
        return d.value;
        });
