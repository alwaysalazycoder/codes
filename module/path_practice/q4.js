// make an array of extensions of the unorganised folder's files...

const fs = require('fs');
const path = require('path');

let folderPath = path.join(__dirname,"unorganised");

let arr = fs.readdirSync(folderPath);
let ext = [];

for(let i = 0; i < arr.length; i++){
    ext[i] = path.extname(arr[i]);  // 🔥🔥 another approach ext.push(path.extname(arr[i]));
   
}

for(let i = 0; i < ext.length; i++){
    console.log("Extension is : ",ext[i]);
}