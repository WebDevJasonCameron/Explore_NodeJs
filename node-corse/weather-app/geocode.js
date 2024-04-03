const axios = require('axios');
const apis = require('./api.js');

const key = apis.MAPBOX_API;

const geocode = (address, key) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${key}`;

	axios({
		method: 'get',
		url: url,
		responseType: 'json',
	})
		.then((res) => {
			console.log(res.data.features);
		})
		.catch((err) => {
			console.log(url);
			console.log('No map data here... ' + err);
		});
};

geocode('huntsville', key);
