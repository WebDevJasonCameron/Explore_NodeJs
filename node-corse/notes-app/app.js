const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: function () {
		console.log('Adding a new note!');
	},
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('Removing a note!');
	},
});

// List all notes
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: function () {
		console.log('Listing all notes');
	},
});

// Read all notes
yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function () {
		console.log('Reading a note');
	},
});

// add, remove, read, list

console.log(yargs.argv);