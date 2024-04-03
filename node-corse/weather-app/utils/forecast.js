const axios = require('axios');
const apis = require('../api.js');

const forecast = (lat, long) => {
	const key = apis.WX_API;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

	axios({
		method: 'get',
		url: url,
		responseType: 'json',
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(url);
			console.log('It did not work... ' + err);
		});
};

forecast(-75.7088, 44.1545);
