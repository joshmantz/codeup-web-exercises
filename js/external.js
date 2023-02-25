"use strict";

//Exercise A:
console.log('Hello from external JS' + '!');

//EXERCISE B-I: Welcome Message:
alert("Welcome to my website!");


//EXERCISE B-II (Colors):
//The following section prompts users for their favorite color responds with an alert message to the user:

var userInput = prompt('What is your favorite color?');
console.log('The user\'s favorite color is: ' + userInput);
alert("Wow, " +userInput + " " + "is my favorite color too!");


//EXERCISE C-I (Movie Rental Calculation):
//The following section gathers data from the user and calculates their total rental price for movies:

var hasMovie = confirm('You\'ve arrived at the movie rental counter. Do you have any rental movies you\'d like to pay for today? Please click \'ok\' for \'yes\' or \'cancel\' for \'no\'.');

//Data associated with the first movie rental:

var movieOneName = prompt('What is the name of the first movie you rented?');
console.log('The title of the first movie is ' + movieOneName + '.');

var movieOneDaysRented = prompt('How many days did you rent ' + movieOneName + '?');
console.log('The user rented ' + movieOneName + ' ' + 'for ' + movieOneDaysRented + ' days.');

//Data associated with the second movie rental:
var movieTwoName = prompt('What is the name of the second movie you rented?');
console.log('The title of the second movie is ' + movieTwoName + '.');

var movieTwoDaysRented = prompt('How many days did you rent ' + movieTwoName + '?');
console.log('The user rented ' + movieTwoName + ' ' + 'for ' + movieTwoDaysRented + ' days.');

//Data associated with the third movie rental:
var movieThreeName = prompt('What is the name of the third movie you rented?');
console.log('The title of the third movie is ' + movieThreeName + '.');

var movieThreeDaysRented = prompt('How many days did you rent ' + movieThreeName + '?');
console.log('The user rented ' + movieThreeName + ' ' + 'for ' + movieThreeDaysRented + ' days.');

var pricePerDay = 3;

var totalPrice = (movieOneDaysRented*pricePerDay) + (movieTwoDaysRented*pricePerDay) + (movieThreeDaysRented*pricePerDay);
var totalPrice = totalPrice.toFixed(2);
console.log('The total price for the user is $' + totalPrice + '.');
alert("Your total today is $" + totalPrice + ". ");




//EXERCISE C-II (EMPLOYEE PAYOUT)
//The following section of code gathers data from the user and calculates their weekly payment total:
var didWork =confirm('Now lets check to see you you made enough money this week to cover the bill! Did you work anywhere this week? Click \'ok\' for \'yes\' or \'cancel\' for \'no\'.');

//Data associated with the first employment source:
var firstEmployer = prompt('Please enter the name of your first employer:');
console.log("The first employer is " + firstEmployer +".");

var firstEmployerRatePerHour = prompt('How much do you get paid per hour (in dollars) at ' + firstEmployer + '?');
console.log("The hourly rate at " + firstEmployer + " is $" + firstEmployerRatePerHour + '.');

var firstEmployerHoursWorked = prompt('How many hours did you work this week at ' + firstEmployer + '?');
console.log("The total number of hours worked at " + firstEmployer + " this week is " + firstEmployerHoursWorked + " hours.");

var firstEmployerPayout = (firstEmployerHoursWorked*firstEmployerRatePerHour).toFixed(2);
console.log('This week\'s payout from ' + firstEmployer + ' is $' + firstEmployerPayout);

//Data associated with the second employment source:
var secondEmployer = prompt('Please enter the name of your second employer:');
console.log("The second employer is " + secondEmployer +".");

var secondEmployerRatePerHour = prompt('How much do you get paid per hour (in dollars) at ' + secondEmployer + '?');
console.log("The hourly rate at " + secondEmployer + " is $" + secondEmployerRatePerHour+ '.');

var secondEmployerHoursWorked = prompt('How many hours did you work this week at ' + secondEmployer + '?');
console.log("The total number of hours worked at " + secondEmployer + " this week is " + secondEmployerHoursWorked + " hours.");

var secondEmployerPayout = (secondEmployerHoursWorked*secondEmployerRatePerHour).toFixed(2);
console.log('This week\'s payout from ' + secondEmployer + ' is $' + secondEmployerPayout);

//Data associated with the third employment source:
var thirdEmployer = prompt('Please enter the name of your third employer:');
console.log("The third employer is " + thirdEmployer +".");

var thirdEmployerRatePerHour = prompt('How much do you get paid per hour (in dollars) at ' + thirdEmployer + '?');
console.log("The hourly rate at " + thirdEmployer + " is $" + thirdEmployerRatePerHour + '.');

var thirdEmployerHoursWorked = prompt('How many hours did you work this week at ' + thirdEmployer + '?');
console.log("The total number of hours worked at " + thirdEmployer + " is " + thirdEmployerHoursWorked + " hours.");

var thirdEmployerPayout = (thirdEmployerHoursWorked*thirdEmployerRatePerHour).toFixed(2);
console.log('This week\'s payout from ' + thirdEmployer + ' is $' + thirdEmployerPayout + '.');

//Combined weekly total for hours worked:
var combinedHoursWorked = (parseInt(firstEmployerHoursWorked) + parseInt(secondEmployerHoursWorked) + parseInt(thirdEmployerHoursWorked));
console.log('The total number of hours worked this week is ' + combinedHoursWorked + ' hours.');

//Combined Weekly payout from all employers:
var combinedWeeklyPayout = (parseInt(firstEmployerPayout) + parseInt(secondEmployerPayout) + parseInt(thirdEmployerPayout));
combinedWeeklyPayout=combinedWeeklyPayout.toFixed(2);
console.log('This week\'s combined payout is $' + combinedWeeklyPayout + '.');

alert("This week, you worked a total of " + combinedHoursWorked + " hours for a total payout of $" + combinedWeeklyPayout + ". Nice work!");




//EXERCISE C-III (CLASS ENROLLMENT):
var desiresRegistration = confirm("Would you like to see if you can register for a finance class?");
var noClassConflict = confirm("The finance class is held on Tuesday's from 10am-12pm (PST). Does this work for your schedule?");
var classCapacity = 30;
var studentsRegistered = 25;
var registrationAvailable = (studentsRegistered < classCapacity) && noClassConflict;
alert("Registration is available!");



//EXERCISE C-IV (PRODUCT OFFER):
//Apply product offer if itemsBought > 2 (except for premium members) and offerNotExpired = true;

var desiresProduct = confirm("Would you like to see if you qualify for a special discount for books?");
var offerTotalDays = 10;
var offerDaysUsed = 5;
var offerNotExpired = (offerTotalDays-offerDaysUsed) <= offerTotalDays;
var premiumMember = confirm("Are you a premium member?");
console.log('Premium member:' + premiumMember);
var numProducts = prompt("How many products did you purchase?");
console.log('The user purchased ' + numProducts + ' product(s)');
var threeProductMin = numProducts > 2;
var applyOffer = (offerNotExpired && premiumMember) || (offerNotExpired && threeProductMin);
console.log('Qualified for Offer: ' + applyOffer + '.');
var toActivateOffer = 3-numProducts;

if (applyOffer){
    alert('You qualify for the special offer!');
} else {
    alert('You don\'t qualify for today\'s offer. Purchase ' + toActivateOffer + ' more item(s) to receive a discount!');
}

