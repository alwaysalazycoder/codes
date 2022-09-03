
// empty object...
let obj = {};
console.log(obj);

// Object is a group of  key value pair ....
let mydata = {
    "name" : "gaurav",
    "age" : 19,
    "gf" : false,
    "rating" : 852,
    "phone_no" : 9428532632,
    papakanaam : "Satish" // here the key is by default string so i dont have to write it in quotes....

};

let spiderMan = {
    name : "peter parker",
    age : 16,
    friends : ["ironman","captain","hawkeye","nad","zendaya"],
    address :{
        state : "US",
        city : "Queens",
        street : "45th"
    },
    sayHi : function(){
        console.log("Spider man ki taraf se hello and thank you for calling spidy bro....");
    },
}
console.log(spiderMan);

// adding the key to object..
spiderMan.movies = ['no way home',"far from home","homecoming"];
console.log(spiderMan);

// deleting a keys
delete spiderMan.movies;

// calling the object....
console.log(spiderMan.result); // if we search for an undefined key then code will not throw error it just simply return undefined
console.log(spiderMan.name);
console.log(spiderMan.age);
console.log(spiderMan.friends);
console.log(spiderMan.friends[1]);
console.log(spiderMan.friends[3]);
console.log(spiderMan.friends[4]);
console.log(spiderMan.address);
console.log(spiderMan.movies);
console.log(spiderMan.address.state);
console.log(spiderMan.address.street);
console.log(spiderMan.address.city);

// calling using another specifier
console.log(spiderMan['name']);
console.log(spiderMan['age']);
console.log(spiderMan['address']['city']); // note this one for the specifier........ 
spiderMan.sayHi();
