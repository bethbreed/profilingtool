const svg = d3.select('svg')
const width = +svg.attr('width')
const height = +svg.attr('height')

const margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = width - margin.left - margin.right,
    height = height - margin.top - margin.bottom;

const x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
const y = d3.scaleLinear()
            .range([height, 0]);


svg.append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv("static/dataset1.csv").then(profileData => {
    profileData.forEach(d => {
        d.Dates = d.Dates;
        d.group_1 = +d.group_1;
        d.group_2 = +d.group_2;
        d.group_3 = +d.group_3;
        d.group_4 = +d.group_4;
        d.group_5 = +d.group_5;
        d.group_6 = +d.group_6;

    });

x.domain(data.map(function(d) { return d.Dates }));
y.domain([0, d3.max(data, function(d) { return d.group_1 })]);

svg.selectAll('.bar')
    .data(profileData)
    .enter().append('rect')
        .attr('class', 'x axis')
        .style('fill', 'steelblue')
        .attr('x', function(d) { return x(d.Dates); })
        .attr('width', x.rangeBand())
        .attr('y', function(d) { return y(d.group_1); })
        .attr('height', function(d) { return height - y(d.group_1); });

svg.append('g')
    .attr('transform', 'translate(0, ' + height + ')')
    .call(d3.axisBottom(x));

svg.append('g')
    .call(d3.axisLeft(y));


});

