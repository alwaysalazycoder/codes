// make a folder in the same directory of the file and make a file with content within it..

let fs = require('fs');
let path = require('path');

let dirPath = path.join(__dirname,"dir_for_q1");

if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

let filePath = path.join(dirPath,"file_1.md");

// writing content in file
fs.writeFileSync(filePath,"## Hello man im the file inside the folder hehe");