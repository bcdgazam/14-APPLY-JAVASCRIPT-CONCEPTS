/*
function inchToFeet(inch){
    let feet = inch/4;
    return feet;
}

let result1 = inchToFeet(300);
console.log(result1);
let result2 = inchToFeet(600);
console.log(result2);

let num1 = 50;
num1 = 90;
console.log(num1);
const name2 ='Bangladesh';
console.log(name2); */

//check by divider

// let leapYear = 1090;
// let reminderOne = leapYear / 4;
// console.log(reminderOne);

// function checkLeapYear(leapYear){
//     let reminderTwo = leapYear % 4;
//     if ( reminderTwo == 0 ){
//         console.log('This year is a leap year!');
//     }
//     else {
//         console.log('Sorry, This is not a leap Year.')
//     }
// }

// checkLeapYear(1980);
// checkLeapYear(2058);

// function checkLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// checkLeapYear(1980);


// function checkLeapYear (year){
//     if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//         console.log(year + ' is a leap year');
//     }
//     else {
//         console.log(year + ' is not a leap year');
//     }
// }

// checkLeapYear(1080);

// function checkLeapYer(year){
//     if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//         console.log(year + ' is a leap year!')
//     }
//     else{
//         console.log( year + ' is not a leap year')
//     }
// }

// checkLeapYer(1080);

// let array = [10, 20, 30, 40, 900];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// function factorial(n){
//     let fact = 1;
//     for (let i = 1; i <= 6; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// let factNumber = factorial(6);
// console.log(factNumber);

//Factorial by while loop

// let i =1; 
// let factorial = 1;

// while(i <= 6){
//     factorial = factorial * i;
//     console.log(factorial);
//     i++;
// }


// function factorialOne (n){
//     let i = 1;
//     let factorialTwo = 1;
//     while(i <= n){
//         factorialTwo = factorialTwo * i;
//         i++;
//     }
//     return factorialTwo;
// }

// let factorialResult = factorialOne(6);
// console.log(factorialResult);

// let factorial = 1;
// for (let i = 1; i <= 6; i++){
//     factorial = factorial * i;
//     console.log(factorial);
// }

// function factorial(n){
//     let factorialCheck = 1;
//     for(let i = 1; i <= 6; i++){
//         factorialCheck = factorialCheck * i;
//     }
//     return factorialCheck;
// }

// let newFactorial = factorial(6);
// console.log(newFactorial);


// let i = 1;
// let factorial = 1;

// while(i<=6){
//     factorial = factorial * i;
//     console.log(factorial);
//     i++;
// }


// function factorial(n){
//     let i = 1;
//     let factorialCheck = 1;
//     while(i <= 6){
//         factorialCheck = factorialCheck * i;
//         i++;
//     }
//     return factorialCheck;
// }

// let factorialResult = factorial(6);
// console.log(factorialResult);


// function factorial (n){
//     if(n == 0){
//         return 1;
//     }
//     else{
//         return n* factorial (n-1);
//     }
// }

// let result = factorial(10);
// console.log(result);

// let factorial = 1;
// for (let i = 6; i > 1; i--){
//     factorial = factorial * i;
//     console.log(factorial)
// }

//Fibonacci Practice

let fibo = [0, 1];
for(let i = 2; i <= 12; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo)