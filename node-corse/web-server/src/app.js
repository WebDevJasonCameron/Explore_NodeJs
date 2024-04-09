const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Smash',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Page',
		name: 'Smash',
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		msg: 'A help message',
	});
});

app.get('/weather', (req, res) => {
	res.send('<h2>Weather Page</h2>');
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
