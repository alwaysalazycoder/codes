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

// 🔥 adding a key
spiderMan.movies = ["nowayhome","farfromhome","homecoming"];

// 🔥 deleting a key
delete spiderMan.movies;

// 🔥 we can change the obj 
spiderMan.name = "gaurav sharma"

// 🔥 we can also access the key using .dot accessor and bracket accessor..
console.log(spiderMan['name']);
console.log(spiderMan[name]); // it will throw error because we haven't mentioned it as a string...
console.log(spiderMan.name); // .dot accessor convert the key into string by default
console.log(spiderMan['address']['city']); // 🔥🔥🔥😎😎