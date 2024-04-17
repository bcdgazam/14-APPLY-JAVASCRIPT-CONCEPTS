//14-5 Calculate Factorial of a number using for loop


/*
//Example
3! = 1*2*3
4! = 1*2*3*4 
*/

// let factorial = 1;
// for( let i = 1; i <= 10; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }


//Factorial by Function

function factorialByFn(n){
    let factorial = 1;
    for( let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let factorialResult1 = factorialByFn(5);
console.log(factorialResult1)