const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			typeof: 'string',
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

// List all notes
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler() {
		notes.listNotes();
	},
});

// Read all notes
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: 'true',
			type: 'string',
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

yargs.parse();
