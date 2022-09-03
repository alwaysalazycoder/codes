// here you are given a array arr=["video","software","songs","apps","other","documents","img"];\

let fs = require('fs');
let path = require('path');

let arr=["video","software","songs","other","documents","img"];

for(let i = 0; i< arr.length; i++){
    let folderPath = path.join(__dirname,arr[i]);
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    let type = arr[i];
    switch(type){
        case "video":{
            let ext = ".mp4";
            fileMaker(folderPath,ext);
            break;
        }
        case "software" : {
            let ext = ".exe";
            fileMaker(folderPath,ext);
            break;
        }
        case "songs" : {
            let ext = ".mp3";
            fileMaker(folderPath,ext);
            break;
        }

        case "other" :{
            let ext = ".zip";
            fileMaker(folderPath,ext);
            break;
        }
        case "documents" : {
            let ext = ".docx";
            fileMaker(folderPath,ext);
            break;
        }
        case "img" : {
            let ext = ".img";
            fileMaker(folderPath,ext);
            break;
        }
        default :{
            console.log("Nothing to worry ");
        }
    }
    
}

function fileMaker(folderPath,ext){
    
    for(let i = 0; i < 6; i++){
        let filePath = path.join(folderPath,`file${i}${ext}`);
        fs.writeFileSync(filePath,"");
    }
}

