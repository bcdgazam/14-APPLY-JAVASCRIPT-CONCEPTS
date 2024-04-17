//14-4 check whether a year is a Leap Year or not

//check by divider
const lepYear = 3688;
const reminder1 = lepYear / 4 ;
console.log(reminder1);

//check by modulas
const leapYear2 = 3688;
const reminder2 = leapYear2 % 4;
console.log(reminder2 == 0);



//make it more organize

const leapYear3 = 3697;
const reminder3 = leapYear3 % 4;
if (reminder3 == 0) {
    console.log('This year is a Leap Year');
} else {
    console.log('This Year is \"NOT" a Leap Year');
}


// Program to check if a year is a leap year
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(3345);
