//14-7 Calculate Factorial in a Recursive function

// Factorial Formula:  10! = 1*2*3*4*5*6*7*8*9*10


// Example
/*
for (let i = 10; i >= 1; i--){
    console.log(i)
}


let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}

*/

function factorial (n){
    if(n == 0){
        return 1;
    }
    else{
        return n* factorial (n-1);
    }
}

let result = factorial(10);
console.log(result);