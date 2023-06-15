var Meter = [79614,79751,80039,80365,80689,81070,81163.3,81326.1,81520.1,81612.3]
//const date = ['25-09-22','18-10-22','21-11-22','02-01-23','06-02-23','22-03-23','12-04-23','03-05-23']
var date = ['2022-09-25','2022-10-18','2022-11-21','2023-01-02','2023-02-06','2023-03-22','2023-04-12','2023-05-03','23-05-31','23-06-14']
// convert date to days

function datesToDays(dateStrings) {
    const firstDate = new Date(dateStrings[0]);
    const days = [];
  
    dateStrings.forEach(dateString => {
      const date = new Date(dateString);
      const diff = Math.round((date - firstDate) / (1000 * 60 * 60 * 24));
      days.push(diff);
    });
  
    return days;
}

function CalculatePrice(arr) {
    const min = Math.min(...arr);
    const normalized = arr.map(value => (value - min));
    const scaled = normalized.map(value => value * 0.36);
    return scaled;
}
  

function calculateGradient(x, y) {
    if (x.length !== y.length || x.length < 2) {
      throw new Error('Arrays must have the same length and at least two elements');
    }
  
    const gradient = [];
  
    for (let i = 1; i < x.length; i++) {
      const dx = x[i] - x[i - 1];
      const dy = y[i] - y[i - 1];
      const slope = dy / dx;
      gradient.push(slope);
    }
  
    return gradient;
}
  
  

const days = datesToDays(date);
const gradient = calculateGradient(days, Meter);
const price = CalculatePrice(Meter);

TESTER = document.getElementById('USAGE');
GRAD = document.getElementById('GRAD');
PRICE = document.getElementById('PRICE');

Plotly.newPlot( TESTER, [{
	x: date,
	y: Meter }], {
	margin: { t: 0 }, xaxis: {
        title: 'Date',
        showgrid: false,
        zeroline: false
        }, yaxis: {
        title: 'Meter Reading (kWh)',
        showline: false,
    } } );

Plotly.newPlot( PRICE, [{
        x: date,
        y: price }], {
        margin: { t: 0 }, xaxis: {
            title: 'Date',
            showgrid: false,
            zeroline: false
            }, yaxis: {
            title: 'Price (GBP)',
            showline: false,
} } );
 

Plotly.newPlot( GRAD, [{
        x: date,
        y: gradient }], {
        margin: { t: 0 }, xaxis: {
            title: 'Date',
            showgrid: false,
            zeroline: false
            }, yaxis: {
            title: 'Gradient (kWh/day)',
            showline: false,
} } );





