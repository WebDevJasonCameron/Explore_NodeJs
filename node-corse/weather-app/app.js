const axios = require('axios');
const apis = require('./api.js');

const WX_KEY = apis.WX_API;
const MAPBOX_KEY = apis.MAPBOX_API;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=${WX_KEY}`;

axios
	.get(url)
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
