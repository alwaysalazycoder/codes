// function in JS....
function counter (){
    
    console.log(
        "hello im counter nice to meet u..."
    )
}


// normal function
function countkar (){

    console.log("=========================================================");

    for(let i = 0; i <= 10; i++){
        console.log(i);
    }

    console.log("Mai to bas counting kar ke deta hu ... 🔥 #sirfnaamkacounternhi");
}


// parameterized function
function returnwala (data1 , data2){
    let rv = data1 + data2;
    rv = console.log(rv);
    return rv;
}


// functions are first class citizens in js because they can be stored as a variable
let a = function sub(data1 , data2){
    return console.log(data1-data2);
};


// IIFE
(function(){  
  
    console.log("hello from the IIFE immediately invoked function expression...");
})();


// IIFE with parameters
(function(num1,num2){
    console.log(num1/num2);
})(20,2);


// function call
counter();
countkar();
returnwala(11,121);
a(100,5);

