const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.group_1)])
        .range([0, width]);
    const yScale = d3.scaleBand() 
        .domain(data.map(d => d.Dates))
        .range([0, height]);

    svg.selectAll('rect').data(data)
     .enter().append('rect')
        .attr('y', d => yScale(d.Dates))
        .attr('width', d => xScale(d.group_1))
        .attr('height', yScale.bandwidth())
};

d3.csv('static/dataset1.csv').then(data => {
    data.forEach(d => {
        d.Dates = d.Dates;
        d.group_1 = +d.group_1;
        d.group_2 = +d.group_2;
        d.group_3 = +d.group_3;
        d.group_4 = +d.group_4;
        d.group_5 = +d.group_5;
        d.group_6 = +d.group_6;
    });
    render(data)
});

