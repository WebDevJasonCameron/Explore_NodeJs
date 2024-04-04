const geocodeApp = require('./utils/geocode');
const forecastApp = require('./utils/forecast');

const coord = [-86.585901, 34.729847];

geocodeApp.geocode('huntsville al', (data) => {
	console.log(data);
});

forecastApp.forecast([coord[0], coord[1]], (data) => {
	console.log(data);
});
