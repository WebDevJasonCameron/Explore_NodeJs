const axios = require('axios');
const apis = require('../api.js');

const geocode = (address, callback) => {
	const key = apis.MAPBOX_API;
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=us&access_token=${key}`;

	axios({
		method: 'get',
		url: url,
		responseType: 'json',
	})
		.then((res) => {
			callback(res.data.features[0].center);
		})
		.catch((err) => {
			console.log('No map data here... ' + err);
			return 'error';
		});
};

module.exports = {
	geocode: geocode,
};
