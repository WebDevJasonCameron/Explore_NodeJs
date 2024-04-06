const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.send('<h2>Hello Express!</h2>');
});

app.get('/help', (req, res) => {
	res.send({
		name: 'Smash',
		age: 47,
	});
});

app.get('/about', (req, res) => {
	res.send('<h2>About Page</h2>');
});

app.get('/weather', (req, res) => {
	res.send('<h2>Weather Page</h2>');
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
