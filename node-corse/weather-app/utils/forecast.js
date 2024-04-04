const axios = require('axios');
const apis = require('../api.js');

const forecast = (coord, callback) => {
	const lat = coord[0];
	const long = coord[1];
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
		});
};

//forecast([-75.7088, 44.1545]);
module.exports = {
	forecast: forecast,
};
