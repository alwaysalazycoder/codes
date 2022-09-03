// copy a file from the dir_for_q1 and paste it to the documents folder...

const fs = require('fs');
const path = require('path');

let sourcePath = path.join(__dirname,"dir_for_q1","file_1.md");
let destPath = path.join(__dirname,"documents","newlyadded.md");

console.log(sourcePath);
console.log(destPath);

fs.copyFileSync(sourcePath,destPath);