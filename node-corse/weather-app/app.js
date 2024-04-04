const geocodeApp = require('./utils/geocode');
const forecastApp = require('./utils/forecast');

geocodeApp.geocode('huntsville al', (coord) => {
	console.log(coord);

	forecastApp.forecast(coord, (data) => {
		console.log(data);
	});
});
