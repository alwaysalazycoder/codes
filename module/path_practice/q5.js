let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname,"movedfile.txt");
let dirPath = path.join(__dirname,"newFolder");
fs.mkdirSync(dirPath);
let destPath = path.join(dirPath,"movedfile.txt");
fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);