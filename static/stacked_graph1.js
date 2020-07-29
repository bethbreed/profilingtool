const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('static/dataset1.csv').then(data => {
    console.log(data);
});

