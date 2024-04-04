const geocodeApp = require('./utils/geocode');
const forecastApp = require('./utils/forecast');

geocodeApp.geocode('huntsville al', (data) => {
	console.log(data);
});

forecastApp.forecast([-75.7088, 44.1545], (data) => {
	console.log(data);
});
