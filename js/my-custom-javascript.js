"use strict";

$(function () {
    console.log('The DOM has finished loading!');
});

//This logs the html contents of the element with paragraphAlphaOneID:
var contents = $('#paragraphAlphaOneID').html();
console.log(contents);

//This changes the bg color of all elements with the class of liClass and logs its content:
var backgroundChange = $('.liAlphaClass').css('background-color', 'grey').html();
console.log(backgroundChange);

//Running a .each(){} function iterates through every <li> element with the same class name:
var htmlCheck = $('.liAlphaClass').each(function() {
    var listItemContent = $(this).html();
        console.log(listItemContent);
})

//This changes the font size of all <li> elements:
$('li').css('font-size', '20px');

//This accesses all elements with class liAlphaClass, the element with id paragraphAlphaTwoID, and all <div> elements and add a border:
$('.liAlphaClass, div, #paragraphAlphaTwoID').css('border', '1px solid black');

//This targets all elements on the page and changes the font-family and text color:
$('*').css('font-family', 'verdana');
$('*').css('color', 'rebeccapurple');

//This targets the h1 element, changes the text, and updates the color to black:
$('#headerOneID').html("Header One Update").css('color', 'black');

//This targets the h1 element ID and logs its content:
var h1Manipulation = $('#headerOneID').html();
    console.log(h1Manipulation);

//This tests assigning two list-item elements with the same ID ('liAlphaThreeID' is duplicated), and an attempt is made to change their text to bold. When both are targeted with the same ID, only the first element is impacted. The second element with the same id remains unchanged.
$('#liAlphaThreeID').css('font-weight', 'bold');


//THE FOLLOWING FUNCTIONS IMPACT THE BOX ELEMENTS ON THE HTML:

//This styles boxes:
$('.boxAlphaClass').css('height','150px').css('width', '200px').css('background-color', 'rebeccapurple');


//Every time the user clicks Box 2 (#boxAlphaTwoID), the background color changes to match the iteration of the array:
$(document).ready(function () {
    var colorOptions = ['red', 'rebeccapurple', 'grey', 'orange'];
    var currentIndex = 0;

    $('#boxAlphaTwoID').on('click', function (){
        $(this).css('background-color', colorOptions[currentIndex]);
        currentIndex = (currentIndex + 1) % colorOptions.length;
    });
});

//THE FOLLOWING FUNCTION BLOCK CYCLES THROUGH INSPIRATIONAL QUOTES AND DISPLAYS THEM TO THE USER.
//THESE WILL CYCLE AUTOMATICALLY EVERY 7 SECONDS.
//THE USER ALSO HAS THE OPTION TO CLICK THROUGH AT THEIR OWN PACE. THE CYCLE RESUMES WHEN THEY STOP CLICKING.

//Step I: Define and array and populate it with data:
//This defines an array of objects as strings including by text and author:
$(document).ready(function () {
    const inspireQuotes = [
        { text: "When you stare into the abyss long enough the abyss stares back at you.", author: "Nietzsche"},
        { text: "All of the greatest blessings come by way of madness- indeed, madness that is heaven-sent.", author: "Plato"},
        { text: "The hero is the man of self-achieved submission.", author: "Joseph Campbell"}
    ];
//Step II: Set the index of the array to 0 by assigning it to a variable:
    let currentQuoteIndex = 0;

//Step III: Create a function to establish the next quote:
//This function displays the current quote on the page targeted at the paragraphBravoOneID Element:
    function displayContent () {
        const quote = inspireQuotes[currentQuoteIndex];
        const quoteText = `${quote.text} - ${quote.author}`;
        $("#paragraphBravoOneID").text(quoteText);
    }

//Step IV: Establish a function to cycle through the next quote in the array:
//The 'if' statement resets the array and starts again at 0, to ensure a continuous cycle:
    function nextInspireQuote() {
        currentQuoteIndex++;
        if(currentQuoteIndex === inspireQuotes.length) {
            currentQuoteIndex = 0;
        }
        displayContent();
    }

//Step V:  Add the 'click' event listener to the element.
//This gives the user the capability to click through quotes at their own pace:

    $('#paragraphBravoOneID').click(function () {
        nextInspireQuote();
    })

//Step VI: Add a setInterval event listener.
//This ensures that quotes cycle automatically, even if a user doesn't click:
//Then, it returns back to cycling if they stop clicking:

    let intervalId = setInterval(function () {
        nextInspireQuote();
    }, 7000);

//Step V: Establish a function to stop the interval when a user clicks:
    $('#paragraphBravoOneID').click(function () {
        clearInterval(intervalId);
        intervalId = setInterval(function() {
            nextInspireQuote();
        }, 7000);
    });

//Step VI: Display the initial quote on page load by calling the displayContent function:
    displayContent();
});


//THIS FUNCTION CHANGES THE BG COLOR OF BOX3 TO ORANGE ON DOUBLE CLICK:
function doubleClickHandler(e) {
    $(this).css('background-color', 'orange');
}

var eleBoxThree = document.getElementById('boxAlphaThreeID');
eleBoxThree.addEventListener('dblclick', doubleClickHandler);

//THIS CHANGES THE BG COLOR OF THE H1 ELEMENT TO LIGHT GREY ON CLICK; IT REMAINS GREY AFTER CLICK:
$('#headerOneID').on('click', function () {
    $('#headerOneID').css('background-color', 'lightgrey');
})

//THIS CHANGES THE FONT SIZE OF ALL PARAGRAPH ELEMENTS IN THE ALPHA PARAGRAPH CLASS TO
//18PX ON DOUBLE CLICK. IT REMAINS 18PX AFTER CLICK:
$('.paragraphAlphaClass').on('dblclick', function () {
    $(".paragraphAlphaClass").css('font-size', '18px');
})

//ON HOVER, THIS CHANGES TEXT COLOR OF PARAGRAPH WITH QUOTES TO RED, THEN RESETS TO PURPLE ON HOVER-OFF:

$('#paragraphBravoOneID').hover(
    function () {
        $(this).css('color', 'darkred');
    },
    function () {
        $(this).css('color', 'rebeccapurple');
    }
);













