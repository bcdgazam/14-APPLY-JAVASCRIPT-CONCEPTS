// let inchToFeet = 200;
// let feet = inchToFeet/12;
// console.log(feet)

//inch to feet by function

// function inchToFeet(n){
//     let feet = n/12;
//     return feet;
// }

// let result = inchToFeet(350);
// console.log(result);

// Check leap year

// const lepYear = 3688;
// const reminder1 = lepYear / 4 ;
// console.log(reminder1);

// const leapYear2 = 3688;
// const reminder2 = leapYear2 % 4;
// console.log(reminder2 == 0);

// function checkLeapYear(n){
//     if((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0)){
//         console.log( n, ' is a leap year.');
//     }
//     else{
//         console.log( n, ' is not a leap year!')
//     }
// }

// checkLeapYear(2024);


//Again revision

// let leapYear = 2024;
// let reminder1 = leapYear % 4;
// console.log(reminder1 == 0);

// function checkLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         console.log(year, ' is a leap year')
//     }
//     else{
//         console.log(year, ' is not a leap year.')
//     }
// }

// checkLeapYear(2024);

// Factorial Practice

// function getFactorial(n){
//     let factorial = 1;
//     for(let i = 1; i <= n; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// let result = getFactorial(6);
// console.log(result);

//Practice factorial by while loop

// function getFactorial(n){
//     let factorial = 1;
//     let i = 1;
//     while(i <= n){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// let result = getFactorial(6);
// console.log(result);


let fibo = [0, 1];
for (let i = 2; i <= 12; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

//Put in a Function

function fibonacci(n){
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let result = fibonacci(12);
console.log(result);