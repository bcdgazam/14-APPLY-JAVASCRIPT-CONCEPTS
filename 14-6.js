//14-6 Calculate Factorial of a number using a while loop

/*
let i = 1;
let factorial = 1;
while(i <= 10){
    factorial = factorial * i;
    // console.log(i, factorial);
    i++;
}

console.log(factorial);

*/

//Make by function

function factorial(n){
    let i = 1;
    let fact = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    }

    return fact;
}

let result = factorial(10);
console.log(result);