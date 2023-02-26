"use strict";

console.log("The file 'while.js' is linked.");

/*
var i = 2;
while (i <= 65536) {
    console.log(i);
    i = i * 2;
}
*/


var cones = Math.floor(Math.random() * 50) + 50;

do {
    var conesSold = Math.floor((Math.random() * 4) + 1);
    if (conesSold < cones) {
        console.log(conesSold + " cones sold.");
        cones -= conesSold;
    } else if (conesSold > cones) {
        console.log("I can\'t sell you " + conesSold + " because I only have " + cones + " left.");
    } else {
        console.log("Yay! I sold them all!");
        cones -= conesSold;
    }
} while(cones > 0);
