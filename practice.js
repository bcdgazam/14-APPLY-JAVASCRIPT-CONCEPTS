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

function factorial(n){
    let fact = 1;
    for (let i = 1; i <= 6; i++){
        fact = fact * i;
    }
    return fact;
}

let factNumber = factorial(6);
console.log(factNumber);