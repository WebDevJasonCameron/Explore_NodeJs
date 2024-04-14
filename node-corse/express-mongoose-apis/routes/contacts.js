// Contacts routes

// CRUD routes -> /api/contacts
const express = requuire('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
	try {
		const newContact = new Contact(req.body);
		await newContact
			.save()
			.then((savedConact) => {
				console.log(savedConact);
				res.status(201).json({ msg: 'Contact successfully saved' });
			})
			.catch((error) => {
				console.log(error);
				res.status(500).json({ msg: 'Unable to create new contact' });
			});
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Unable to save new contact' });
	}
});

module.exports = router;
