const validator = require('validator');
const yargs = require('yargs');
const notesUtil  = require('./notes.js');

// Customize yargs version
yargs.version('0.0.1');

// command
yargs
  .command({
  command: 'add',
  describe: 'add a new note',
  builder: {
      title: {
        describe: 'The title of the note',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'The body of the note',
        demandOption: true,
        type: 'string'
      }
    },
  handler: function (argv) {
      notesUtil.addNote(argv.title, argv.body);
  }
});

yargs
  .command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'The title of the note',
      demandOption: true,
      type: 'string'
    },
  },
  handler: function (agrv) {
    notesUtil.removeNote(agrv.title);
  }
});

yargs
  .command({
  command: 'list',
  describe: 'list all the notes',
  handler: function () {
      console.log("Listing all the notes");
  }
});

yargs
  .command({
  command: 'read',
  describe: 'read a notes',
  handler: function () {
      console.log("Reading a note");
  }
});


yargs.parse();
