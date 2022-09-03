let number = 6; 
flag = false;

for(let i = 2; i*i <= number; i++){
    if(number % i == 0){
        flag = false;
    }
    else{
        flag = true;
    }
}

console.log(flag);