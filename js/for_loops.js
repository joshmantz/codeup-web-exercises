"use strict";

console.log("The file 'for_loops.js' is linked.");

//EXERCISE II:
function showMultiplicationTable(x) {
    for(let i = 1; i<=10; i++){
        console.log(x + ' x ' + i + ' = ' + (x*i));
    }
}


/*
//EXERCISE III:

for(let i = 1; i<=10; i++) {
    var randomNumber = Math.floor(Math.random()*(200-20)+20);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}
*/

/*
//EXERCISE IV:

for(let i=1; i<10; i++) {
    var numString = "";
    for (var n=1; n<=i; n++) {
        numString += i;
    }
    console.log(numString);
}
*/

/*
//EXERCISE V:

for(let i=100; i>=5; i=i-5) {
    console.log(i);
}
*/


