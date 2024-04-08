const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Smash',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {});
});

app.get('/help', (req, res) => {
	res.render('help', {});
});

app.get('/weather', (req, res) => {
	res.send('<h2>Weather Page</h2>');
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
