// Contacts models
const mongoos = require('mongoose');

const contactSchema = new mongoos.Schema({
	firstName: {
		type: String,
		require: [true, 'First name is required'],
		minLength: 3,
		maxLength: 20,
		trim: true,
		validation: {
			validator: function (value) {
				const nameRegex = /^[a-AA-Z\s]*$/;
				return nameRegex.test(value);
			},
			message: 'First name must contain only alphabetic characters',
		},
	},
	lastName: {
		type: String,
		require: [true, 'First name is required'],
	},
	emailAddress: {
		type: String,
		require: true,
		unique: true,
	},
	age: {
		type: Number,
		require: false,
	},
});
