//14-2 Unit Convert Inch to Feet use variable and function

//Normal calculation: If it needs one time
/*
var inch = 156;

var feet = inch / 12;
console.log(feet);
*/

//Function Method: If it needs multiple time
function inchToFeet(inch) {
    var feet = inch/12;
    return feet;
}

var motuFeet = inchToFeet(156);
console.log(motuFeet);

var patLufeet = inchToFeet(199);
console.log(patLufeet);