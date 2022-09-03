// Strings in JS...

let str = "I am sorry baby.....!! but mai move on kar chuka hu...!!!(ohhhhhhhhhhhh) ";
let str2 = "                 love me                         ";
console.log(str);


// 🔥Methods in string...🔥

// 1. length --> return the length of a string
let length = str.length;
console.log(length);

// 2. slice --> used to divide the string into parts using some parameters.. and it return in array...end parameter is exclusive and start parameter is inclusive..
let slicedArr = str.slice(1,5);
console.log(slicedArr);

// 3. replace -->  replace the certain string to other string and haan the original string remained unchanged ...
let replaceStr = str.replace("kar" ,"nahikar");
console.log(replaceStr);
console.log(str);

// 4. to uppercase --> change the string to the uppercase
let uppercase = str.toUpperCase();
console.log(uppercase);

// 5. to lowercase --> change the string to the lowercase..
let lowercase = str.toLowerCase();
console.log(lowercase);

// 6. concat --> it is used add two string...
let one = "gaurav";
let two = "loves";
let three = "khushi";
let stat = one.concat(two).concat(three);
console.log(stat);

// 7. charAt --> gives char at string
let char = str.charAt(23);
console.log(char);

// 8. endswith --> return true with it ends with the same value...
let data = str.endsWith("hhh) ");
console.log(data);

// 9. split --> split the string on the base of parameter and returns an array..
let dataArr = str.split(" ");
console.log(dataArr);

// 10. trim --> removes the leading and trailing white spaces from the string
let trimmedStr = str2.trim()
console.log(trimmedStr);

//