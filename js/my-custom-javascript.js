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
$('li').css('font-size', '21px');

//This accesses all elements with class liAlphaClass, the element with id paragraphAlphaTwoID, and all <div> elements and add a border:
$('.liAlphaClass, div, #paragraphAlphaTwoID').css('border', '1px solid black');

//This targets all elements on the page and changes the font-family and text color:
$('*').css('font-family', 'verdana');
$('*').css('color', 'rebeccapurple');

//This targets the h1 element, changes the text, and updates the color to black:
$('#headerOneID').html("Header One Update").css('color', 'black');

//This tests assigning two list-item elements with the same ID ('liAlphaThreeID' is duplicated), and an attempt is made to change their text to bold. When both are targeted with the same ID, only the first element is impacted. The second element with the same id remains unchanged.
$('#liAlphaThreeID').css('font-weight', 'bold');








