const axios = require('axios');
const apis = require('./api.js');

const WX_KEY = apis.WX_API;
const MAPBOX_KEY = apis.MAPBOX_API;

const wxURL = `https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=${WX_KEY}`;

/*
axios
	.get(wxURL)
	.then((res) => {
		const wx = res;
		const temp = wx.data.main.temp;
		const tempFeel = wx.data.main.feels_like;
		const msg = `Current temperature is ${temp} but it feels like ${tempFeel}`;

		console.log(msg);
	})
	.catch((err) => {
		console.log('Error: ' + err.response.data.message);
	});
*/

const geocode = (address, callback) => {
	const key = MAPBOX_KEY;
	const url = `https://api.mapbox.com/search/searchbox/v1/suggest?q=${address}?language=en&limit=1&?access_token=${key}`;
	axios.get(url).then((res) => {
		if (err) {
			console.log(err);
		} else {
			callback(res);
		}
	});
};

geocode('Huntsville', (err, data) => {
	console.log(data);
});
