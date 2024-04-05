const { geocode } = require('./utils/geocode');
const { forecast } = require('./utils/forecast');

const address = process.argv[[2]];

if (!address) {
	console.log('Please provide an address. ');
} else {
	geocode(address, (coord) => {
		console.log(coord);

		if (coord === 'error') {
			return 'app.js error at the geocodeApp';
		}

		forecast(coord, (data) => {
			if (data === 'error') {
				return 'app.js error at the forecastApp';
			}
			console.log(data);
		});
	});
}
