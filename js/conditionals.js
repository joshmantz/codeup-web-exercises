"use strict";
console.log("The src file `conditionals.js` is successfully linked");
/* ########################################################################## */


/*
//THE FIRST EXERCISE:
//* TODO:
//* Create a function named `analyzeColor` that accepts a string that is a color
//* name as input. This function should return a message which relates to the
//* color stated in the argument of the function. For colors you do not have
//* responses written for, return a string stating so
//*
//* Example:
//*  > analyzeColor('blue') // returns "blue is the color of the sky"
//*  > analyzeColor('red') // returns "Strawberries are red"
//*  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//*
//* You should use an if-else-if-else block to return different messages.
//*
//* Test your function by passing various string literals to it and
//* console.logging the function's return value

function analyzeColor(colorName) {
    var colorNameLower = colorName.toLowerCase();
    console.log(colorNameLower);

    if (colorNameLower === "blue") {
        alert("Blue is the color of the sky.");

    }else if (colorNameLower === "red"){
        alert("Strawberries are red.");

    }else {
        alert("I don't have any words to describe the color " + colorName + ".");
    }
    console.log("Function Complete");
}
//END OF THE FIRST EXERCISE:
*/




/*
//THE SECOND EXERCISE
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// TODO:
// Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// You should see a different message every time you refresh the page

var colorOutput = analyzeColor(randomColor);
console.log(colorOutput);

//END OF THE SECOND EXERCISE:
*/





/*
//THE THIRD EXERCISE:
// TODO:
// Comment out the code above, and refactor your function to use a switch-case statement
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

//var colorChoice = prompt("Please input a color:");

var colorChoice = randomColor;
console.log(colorChoice);
//var colorChoiceLowercase = colorChoice.toLowerCase();

var colorChoiceLowercase = randomColor.toLowerCase();
console.log(colorChoiceLowercase);

    switch(colorChoiceLowercase){
        case "blue":
            alert("Blue is the color of the sky.");
            break;
        case "red":
            alert("Strawberries are red.")
            break;
        default:
            alert("I don't have any words to describe " + colorChoiceLowercase + ".");
            break;
    }
//END OF THE THIRD EXERCISE:
*/


/*
//THE FOURTH EXERCISE:

     //* TODO:
     //* Prompt the user for a color when the page loads, and pass the input from the
     //* user to your `analyzeColor` function. Alert the return value from your
     //* function to show it to the user.

    // This runs the analyzeColor function with a user prompt:

    var colorChoice = prompt("Please input a color:");
    console.log(colorChoice);

    var colorChoiceLowercase = colorChoice.toLowerCase();
    console.log(colorChoiceLowercase);

    alert(analyzeColor(colorChoiceLowercase));

//END OF THE FOURTH EXERCISE:
// ##########################################################################
*/

/*
THE FIFTH EXERCISE:
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.

function calculateTotal (totalAmount, luckyNumber){
    switch(luckyNumber){
        case 1:
            var firstResult = (totalAmount-(totalAmount*0.1));
            console.log(firstResult);
            alert ("Your original bill was " + totalAmount + " and your lucky number is " + luckyNumber + " for a final payment due of " + firstResult);
            break;
        case 2:
            var secondResult = (totalAmount-(totalAmount*0.25));
            console.log(secondResult);
            alert ("Your original bill was " + totalAmount + " and your lucky number is " + luckyNumber + " for a final payment due of " + secondResult);
            break;
        case 3:
            var thirdResult = (totalAmount-(totalAmount*0.35));
            console.log(thirdResult);
            alert ("Your original bill was " + totalAmount + " and your lucky number is " + luckyNumber + " for a final payment due of " + thirdResult);
            break;
        case 4:
            var fourthResult = (totalAmount-(totalAmount*0.5));
            console.log(fourthResult);
            alert ("Your original bill was " + totalAmount + " and your lucky number is " + luckyNumber + " for a final payment due of " + fourthResult);
            break;
        case 5:
            var fifthResult = (totalAmount-(totalAmount*0))
            console.log(fifthResult);
            alert ("Your original bill was " + totalAmount + " and your lucky number is " + luckyNumber + " for a final payment due of " + fifthResult);
            break;
        default:
            var otherResult = (totalAmount-(totalAmount*0));
            console.log(otherResult);
            alert ("Your original bill was $" + totalAmount + " and your lucky number is " + luckyNumber + " for a final bill of " + otherResult);
            break;
    }
}
//END OF THE FIFTH EXERCISE:
*/


/*
//THE SIXTH EXERCISE:

    //* TODO:
    //* Uncomment the line below to generate a random number between 0 and 5.
    //* (In this line of code, 0 is inclusive, and 6 is exclusive)
    //* Prompt the user for their total bill, then use your `calculateTotal` function
    //* and alerts to display to the user what their lucky number was, what their
    //* price before the discount was, and what their price after the discount is.



//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("Please enter the total amount of your bill:");
console.log(totalBill)

calculateTotal(totalBill, luckyNumber);
console.log(totalBill);
console.log(luckyNumber);

//END OF THE SIXTH EXERCISE:
*/


/*
//THE SEVENTH EXERCISE:
//* TODO:
//* Write some JavaScript that uses a `confirm` dialog to ask the user if they
//* would like to enter a number. If they click 'Ok', prompt the user for a
//* number, then use 3 separate alerts to tell the user:
//* - whether the number is even or odd
//* - what the number plus 100 is
//* - if the number is negative or positive
//*
//* Do *NOT* display any of the above information
//* if the user enters a value that is not of the number data type.
//* Instead, use an alert to inform them of the incorrect input data type.
//*
//*
//* Can you refactor your code to use functions?
//* HINT: The way we prompt for a value could be improved


var inputNumber = confirm("Would you like to enter a number?");
console.log(inputNumber);

if (inputNumber){
    var numChoice = prompt("Please input a number:");
    if (isNaN(numChoice)) {
        alert ("The value you entered is not a number. Please try again with a numerical value.");
    } else {
        if (numChoice % 2 === 0) {
            alert(numChoice + " is an even number.");

        } else {
            alert(numChoice + " is an odd number.");
        }

        alert(numChoice + "+ 100 = " + (parseFloat(numChoice) + Number(100)));

        if (numChoice >= 0) {
            alert(numChoice + " is a positive number.");
        } else {
            alert(numChoice + " is a negative number");
        }
    }
} else {
    alert("This operation has been cancelled.");
}

//END OF THE SEVENTH EXERCISE:
*/
