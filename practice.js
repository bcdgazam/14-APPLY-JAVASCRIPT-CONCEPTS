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

const lepYear = 3688;
const reminder1 = lepYear / 4 ;
console.log(reminder1);

const leapYear2 = 3688;
const reminder2 = leapYear2 % 4;
console.log(reminder2 == 0);

function checkLeapYear(n){
    if((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0)){
        console.log( n, ' is a leap year.');
    }
    else{
        console.log( n, ' is not a leap year!')
    }
}

checkLeapYear(2024);