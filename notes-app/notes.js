const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');



const getNotes = () => {
    return "Your notes...";   
}


const readNote = (title) => {
    const notes = loadNotes();
    const noteWantToRead = notes.find((note) => note.title === title);

    if (noteWantToRead) {
        console.log('Note Title: ' + noteWantToRead.title);
        console.log('Note Body: ' + noteWantToRead.body);
    } else {
        console.log('Didn\'t find the note');
    }
}


const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }

}



// const removeNode = function(title) {
//     // console.log('The note title: ' + title + ' has been removed!');

//     const notes = loadNotes();
//     const excludeTitle = notes.filter(function(note) {
//         return note.title !== title;
//     })

//     if (excludeTitle.length < notes.length) {
//         saveNotes(excludeTitle);
//         console.log(chalk.green(`Delete title: ${title} note successfully !`))
//     } else {
//         console.log(chalk.red('Didn\'t find the title: ' + title));
//     }
// }


const removeNode = (title) => {
    // console.log('The note title: ' + title + ' has been removed!');

    const notes = loadNotes();
    const excludeTitle = notes.filter((note) => note.title !== title)

    if (excludeTitle.length < notes.length) {
        saveNotes(excludeTitle);
        console.log(chalk.green(`Delete title: ${title} note successfully !`))
    } else {
        console.log(chalk.red('Didn\'t find the title: ' + title));
    }
}


const listNodes = () => {
    console.log(chalk.blue.inverse('Your notes:'));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.blue(note.title));
    });
}


// const saveNotes = function(notes) {
//     const dataJSON = JSON.stringify(notes);
//     fs.writeFileSync('notes.json', dataJSON);
// }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// const loadNotes = function() {

//     try {
//         const dataBuffer = fs.readFileSync('notes.json');
//         const dataJSON = dataBuffer.toString();
//         return JSON.parse(dataJSON);
//     } catch (e) {
//         return [];
//     }

// }


const loadNotes = () => {
    
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNode: removeNode,
    listNodes: listNodes,
    readNote: readNote,
}