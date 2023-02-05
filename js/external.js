"use strict";

console.log("Hello from external JS");

// WELCOME MESSAGE:
alert("Welcome to my website!");

//COLORS:
//The following section prompts users for their favorite color
//and then responds with an alert message to the user.

var userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);
alert("Wow, " +userInput + " " + "is my favorite color too!");

//QUESTION III PART I (MOVIE RENTAL CALCULATION)
//The following section gathers data from the user and calculates their total rental price for movies:

//This line asks the user if they have any movies to pay for:
var hasMovie = confirm('You\'ve arrived at the movie rental counter. Do you have any rental movies you\'d like to pay for today?');

//Data associated with the first movie rental:
var movieOneName = prompt('What is the name of the first movie you rented?');
console.log('The title of the first movie is ' + movieOneName);

var movieOneDaysRented = prompt('How many days did you rent ' + movieOneName + '?');
console.log(movieOneDaysRented);

//Data associated with the second movie rental:
var movieTwoName = prompt('What is the name of the second movie you rented?');
console.log('The title of the second movie is ' + movieTwoName);

var movieTwoDaysRented = prompt('How many days did you rent ' + movieTwoName + '?');
console.log(movieTwoDaysRented);

//Data associated with the third movie rental:
var movieThreeName = prompt('What is the name of the third movie you rented?');
console.log('The title of the third movie is ' + movieThreeName);

var movieThreeDaysRented = prompt('How many days did you rent ' + movieThreeName + '?');
console.log(movieThreeDaysRented);

var pricePerDay = 3;

var totalPrice = (movieOneDaysRented*pricePerDay) + (movieTwoDaysRented*pricePerDay) + (movieThreeDaysRented*pricePerDay);
alert("Your total today is " + totalPrice + ". ");

//The following section of code gathers data from the user and calculates their weekly payment total:
var didWork =confirm('Now lets check to see you you made enough money this week to cover the bill! Did you work anywhere this week?');

//QUESTION III PART II (EMPLOYEE PAYOUT)

//DATA ASSOCIATED WITH THE FIRST EMPLOYMENT SOURCE:
var firstEmployer = prompt('Please enter the name of your first employer:');
console.log("The first employer is " + firstEmployer +".");

var firstEmployerRatePerHour = prompt('How much do you get paid per hour (in dollars) at ' + firstEmployer + '?');
console.log("The hourly rate at " + firstEmployer + " is " + firstEmployerRatePerHour + '.');

var firstEmployerHoursWorked = prompt('How many hours did you work this week at ' + firstEmployer + '?');
console.log("The total number of hours worked at " + firstEmployer + " is " + firstEmployerHoursWorked + ".");

var firstEmployerPayout = firstEmployerHoursWorked*firstEmployerRatePerHour;

//DATA ASSOCIATED WITH THE SECOND EMPLOYMENT SOURCE:
var secondEmployer = prompt('Please enter the name of your second employer:');
console.log("The first employer is " + secondEmployer +".");

var secondEmployerRatePerHour = prompt('How much do you get paid per hour (in dollars) at ' + secondEmployer + '?');
console.log("The hourly rate at " + secondEmployer + " is " + secondEmployerRatePerHour + '.');

var secondEmployerHoursWorked = prompt('How many hours did you work this week at ' + secondEmployer + '?');
console.log("The total number of hours worked at " + secondEmployer + " is " + secondEmployerHoursWorked + ".");

var secondEmployerPayout = secondEmployerHoursWorked*secondEmployerRatePerHour;

//DATA ASSOCIATED WITH THE THIRD EMPLOYMENT SOURCE:
var thirdEmployer = prompt('Please enter the name of your third employer:');
console.log("The third employer is " + thirdEmployer +".");

var thirdEmployerRatePerHour = prompt('How much do you get paid per hour (in dollars) at ' + thirdEmployer + '?');
console.log("The hourly rate at " + thirdEmployer + " is " + thirdEmployerRatePerHour + '.');

var thirdEmployerHoursWorked = prompt('How many hours did you work this week at ' + thirdEmployer + '?');
console.log("The total number of hours worked at " + thirdEmployer + " is " + thirdEmployerHoursWorked + ".");

var thirdEmployerPayout = thirdEmployerHoursWorked*thirdEmployerRatePerHour;

//TOTAL HOURS WORKED THIS WEEK FROM ALL EMPLOYERS
var combinedHoursWorked = firstEmployerHoursWorked+secondEmployerHoursWorked+thirdEmployerHoursWorked;

//Weekly payout calculation:
alert("This week, you worked a total of " + combinedHoursWorked + " hours for a total payout of $" + (firstEmployerPayout+secondEmployerPayout+thirdEmployerPayout) + ". Nice work!");
console.log("The user's combined weekly payout is $" +(firstEmployerPayout+secondEmployerPayout+thirdEmployerPayout) + ".");

//Question 3 Part III (Class Enrollment):
var desiresRegistration = confirm("Would you like to see if you can register for a finance class?");
var noClassConflict = confirm("The finance class is held on Tuesday's from 10am-12pm (PST). Does this work for your schedule?");
var classCapacity = 30;
var studentsRegistered = 25;
var registrationAvailable = (studentsRegistered < classCapacity) && noClassConflict;
alert("Registration is available!");

//Question 3 Part IV (Product Offer):
//apply product offer if itemsBought > 2 (except for premium members) and offerNotExpired = true;

var desiresProduct = confirm("Would you like to see if you qualify for a special discount for books?");
var offerTotalDays = 10;
var offerDaysUsed = 5;
var offerNotExpired = (offerTotalDays-offerDaysUsed) <= offerTotalDays;
var premiumMember = confirm("Are you a premium member?");
console.log('Premium member:' + premiumMember);
var numProducts = prompt("How many products did you purchase?");
var threeProductMin = numProducts > 2;
var applyOffer = (offerNotExpired && premiumMember) || (offerNotExpired && threeProductMin);
console.log('Qualifies for Offer: ' + applyOffer);