const chalk = require("chalk");
const yargs = require("yargs");
const notes = require('./notes');

// Customize yargs version
yargs.version('1.2.1');

// Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})


// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'the title of note you want to remove',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNode(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list your notess',
    handler() {
        notes.listNodes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'The note title you want to read',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})


yargs.parse();
// console.log(yargs.argv);
