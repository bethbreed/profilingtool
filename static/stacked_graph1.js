const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');


const render = data => {
    const yValue = d => d.group_1;
    const xValue = d => d.Dates;

    const yScale = d3.scaleLinear()
        .range([height, 0])        
        .domain([0, d3.max(data, yValue)]);

        const xScale = d3.scaleBand() 
        .domain(data.map(xValue))
        .range([0, width]);

     
    svg.selectAll('rect').data(data)
     .enter().append('rect')
        .attr('y', d => xScale(xValue(d)))
        .attr('height', d => yScale(yValue(d)))
        .attr('width', xScale.bandwidth())

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

