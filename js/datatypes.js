console.log("The file 'datatypes.js' is linked.");

//WORKING WITH DATA TYPES, OPERATORS, AND VARIABLES
//EXERCISE 3 - MOVIE RENTAL

var littleMermaid = 3; //days rented
var brotherBear = 5; //days rented
var hercules = 1; //days rented
var dailyRate = 3; //in dollars ($)

var rentalTotal = (littleMermaid*dailyRate + brotherBear*dailyRate + hercules*dailyRate);
rentalTotal = rentalTotal.toFixed(2);
console.log ("Movie Rental Total: $" + rentalTotal + ".");


//EXERCISE 3 - PAYCHECK CALCULATION

var rateGoogle = 400; //dollars per hour
var rateAmazon = 380; //dollars per hour
var rateFacebook = 350; //dollars per hour

var hoursGoogle = 6;
var hoursAmazon = 4;
var hoursFacebook = 10;

var totalPay = rateGoogle*hoursGoogle + rateAmazon*hoursAmazon + rateFacebook*hoursFacebook;
totalPay = totalPay.toFixed(2);
console.log("Total Pay: $" + totalPay);

//EXERCISE 3 - ELIGIBLE FOR CLASS ENROLMENT (FIRST METHOD)

noConflict = true;
slotAvailable = true;
enrollStudent = (noConflict || slotAvailable);
console.log("Enrollment is Available:  " + enrollStudent);

//EXERCISE 3 - ELIGIBLE FOR CLASS ENROLMENT (SECOND METHOD)
//Alternatively, we can use functions and conditionals:

//The 'availableSeats' function (below) calculates seats remaining:

var classCapacity = 12; //max number of students for this class
var seatReserved = 7; //total seats already reserved
var seatRemaining = classCapacity-seatReserved;

function availableSeat () {
    if (seatRemaining > 0) {
        alert ("Registration is available. There are " + seatRemaining + " seats remaining");
    } else {
        console.log("Class Status: Full.");
    }
}

//The 'classRegistration' function uses an if-else statement.
//It first confirms that the user's schedule doesn't conflict with the class schedule.
//Then, it calls the availableSeats function (above) and returns a message to the user.
function classRegistration () {
    let desireRegistration = confirm("Would you like to find out if registration is available?");
    if (desireRegistration === true) {
        let clearSchedule = confirm("This class takes place on Wednesdays from 1145 am - 245 pm. Does this work with your schedule? (Click 'ok' for 'yes' or 'cancel' for 'no')");
            if (clearSchedule) {
                availableSeat();
            } else {
                alert ("I'm sorry, this class conflicts with your current schedule.");
            }
    } else {
        return false;
    }
}

//EXERCISE 3 - PRODUCT OFFER:

function applyOffer (itemsPurchased, notExpired) {
    if (itemsPurchased > 2 && notExpired) {
        console.log("Discount Applied");
    } else if (itemsPurchased <= 2 && notExpired) {
            console.log("Purchase " + (3-itemsPurchased) + " more item(s) to qualify for a discount.");
    } else if (itemsPurchased > 2 && (notExpired == false)) {
        console.log("This offer has expired.");
    } else {
        console.log("Offer not valid.");
    }
}

//EXERCISE 4 - PASSWORD:

var username = 'codeup';
var password = 'notastrongpassword';
var passwordCheck = (password.length >= 5) && (password.length <= 20) && password.includes(username) == false && password == password.trim() && username == username.trim();

