const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Contact = require('./routes/contact');

app.use('/api', Contact);

// Connection from Mongoose to MongoDB
const connectToDB = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/mydatabase', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch {
		error;
	}
	{
		console.log(error);
		process.exit(1);
	}
	console.log('Connected to MongoDB');
};

connectToDB();

const port = 3000;
app.listen(port, () => {
	console.log('Server started successfully');
});
