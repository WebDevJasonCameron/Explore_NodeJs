const axios = require('axios');
const api = require('./api.js');

const KEY = api.API;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=${KEY}`;

console.log(url);

axios
	.get(url)
	.then((res) => {
		const wx = res;
		const msg = wx.data.main.temp;

		console.log(msg);
	})
	.catch((err) => {
		console.log('Error: ' + err.response.data.message);
	});
