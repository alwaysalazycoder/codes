let calc = require("./calc");

let add = calc.addition(1,2);
let mul = calc.multiplication(2,3);
let sub = calc.subtraction(3,1);
let div = calc.division(20,2);

console.log(calc);
console.log(add,div,mul,sub);

// this is the accessing of our custom module....