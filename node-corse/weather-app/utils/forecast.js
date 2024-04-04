const axios = require('axios');
const apis = require('../api.js');

const forecast = (coord, callback) => {
	const lat = coord[1];
	const long = coord[0];
	const key = apis.WX_API;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

	axios({
		method: 'get',
		url: url,
		responseType: 'json',
	})
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			console.log(url);
			console.log('It did not work... ' + err);
			return 'error';
		});
};

module.exports = {
	forecast: forecast,
};
