const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('static/dataset1.csv').then(data => {
    data.forEach(d => {
        d.Dates = d.Dates;
        d.group_1 = +d.group_1;
        d.group_2 = +d.group_2;
        d.group_3 = +d.group_3;
        d.group_4 = +d.group_4;
        d.group_5 = +d.group_5;
        d.group_6 = +d.group_6;
        console.log(d.Dates);
        console.log(d.group_1);
    });
});

