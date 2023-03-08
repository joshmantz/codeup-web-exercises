"use strict";

//$("selector").keyboardEvent(callBackFn(){})

//Note that keydown impacts all keys:

/*$(document).keydown(function(e) {
    console.log("KEY DOWN " + e.keyCode + " " + e.key);
})*/

//Keypress only impacts a limited number of keys: For example,
//Keypress does not impact the arrow keys:

/*$(document).keypress(function(e) {
    console.log("KEY PRESS " + e.keyCode + " " + e.key);
})*/

//Keyup essentially mirrors key down:
/*$(document).keyup(function(e) {
    console.log("KEY UP " + e.keyCode + " " + e.key);
});*/

//Examples of using 'on' versus 'off':

/*$(document).on("keydown", function(e) {
    console.log ("Key down " + e.keyCode + " " + e.key);
});*/

//Removing an event listener:
/*$("#buttonID").on("click", function(e) {
    e.preventDefault();
    alert("Button Clicked")

    $(document).off("keydown");
});*/


//EXAMPLE OF USING PASSWORD. WHEN ENTERED CORRECTLY, BG CHANGES RED:
//IF INCORRECT AND ATTEMPT EXCEEDS 21 CHARACTERS, USER IS ALERTED TO RETRY:
//OR, IF USER HITS ENTER, AND PW IS INCORRECT, USER IS ALERTED TO REENTER:

/*let password = "hello";
let userInput = "";

$(document).keyup(function(e) {
    userInput+=e.key;
    console.log("User input so far...");
    console.log(userInput);

    if (password === userInput) {
        $("body").css("background-color", "darkred");
    } else if (userInput.length > 21 || e.key.includes("Enter")) {
        alert("You've entered an incorrect password. Please click 'ok' reenter your password to continue.");
        userInput = "";
    }
});

$(document).click(function(e) {
    userInput = ""
    $("body").css("background-color", "white");
    console.log("UserInput emptied: " + userInput + " < should be blank");
});*/

let gameHack = "3838404037393739666513";
let playerInput = "";

$(document).keyup(function(e) {
    console.log(e.keyCode)

    playerInput+= e.keyCode;

    if (gameHack === playerInput) {
        alert("You've added 30 lives!");
        $("body").css("background-color", 'darkred');
    }
})

$(document).click(function(e) {
    playerInput = ""
    $("body").css("background-color", "white");
})
















