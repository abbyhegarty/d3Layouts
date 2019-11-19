var dataset = [25,30,10,15,20];

var color = d3.scaleOrdinal(d3.schemeCategory10);
var pie = d3.pie(); 

var width = 300;
var height = 300;
var outerRadius= width/2
var innerRadius = 0;

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
