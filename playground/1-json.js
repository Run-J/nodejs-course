const fs = require('fs')

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
// }


// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);


// Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json');
const dataString = dataBuffer.toString();
const data = JSON.parse(dataString);

data.name = "Run Ji";
data.age = 21;

// console.log(dataBuffer);
// console.log(dataString);
// console.log(data);

const newData = JSON.stringify(data);
fs.writeFileSync('1-json.json', newData);