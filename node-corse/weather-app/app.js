const geocodeApp = require('./utils/geocode');
const forecastApp = require('./utils/forecast');

geocodeApp.geocode('seattle', (coord) => {
	console.log(coord);

	if (coord === 'error') {
		console.log('app.js error at the geocodeApp');
	} else {
		forecastApp.forecast(coord, (data) => {
			if (data === 'error') {
				console.log('app.js error at the forecastApp');
			} else {
				console.log(data);
			}
		});
	}
});
