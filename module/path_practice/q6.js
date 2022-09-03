
const fs = require('fs');
const path = require('path');

let folderPath = path.join(__dirname,"unorganised");

let arr = fs.readdirSync(folderPath);
let ext = [];

for(let i = 0; i < arr.length; i++){
    ext[i] = path.extname(arr[i]);  // 🔥🔥 another approach ext.push(path.extname(arr[i]));
   
}

for(let i = 0; i < ext.length; i++){
    // console.log("Extension is : ",ext[i]);
    if(ext[i] == ".mp3"){
        console.log(ext[i], " -->  Songs hai ji");
    }
    else if(ext[i] == ".sh"){
        console.log(ext[i], " -->  Ohh ji others hai ji");
    }
    else if(ext[i] == ".mp4"){
        console.log(ext[i], " -->  Bro video hai!!");
    } 
    else if(ext[i] == ".png" ||ext[i] == ".jpeg" || ext[i] == ".jpg"){
        console.log(ext[i], " -->  Photo hai yaar..");
    }
    else{
        console.log(ext[i], " -->  Other hai ji");
    }
}