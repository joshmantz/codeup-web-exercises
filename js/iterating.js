"use strict";

console.log("The 'iterating_arrays.js' file is successfully linked.");

/*
(function(){
    "use strict";
*/

//Note: After many attempts at reworking this, I commented out the IFFE to allow the functions to be called in the final section.
//When I attempt to call the functions with the IFFE in place, the functions are undefined.
//I haven't yet been able to figure out the problem. When I comment-out the IFFE, the functions can be called and work.
//I attempted to indent the final three functions in multiple places; I tried to move them around to different
//parts of the page, yet nothing seems to work. I'm not sure what's going on. I thought that anything inside the scope
//of the IFFE would work. In reworking this exercise, I obviously have questions about the IFFE and will keep looking
//for a solution.


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

var names = ['Kate', 'Jack', 'Sawyer', 'Hurley'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

console.log("There are " + names.length + " names in the \'names\' array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

names.forEach(function(name) {
  console.log(name + " is a character from the television series \'Lost\'.");
})

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for (var i = 0; i < names.length; i++) {
    console.log("The name at index " + i + " is " + names[i] + " within the '" + names + "' array.");
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

names.forEach(function(element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);
})


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

function first (array) {
    return array[0];
    }

function second (array) {
    return array[1];
}

function last (array) {
    return array.slice(-1);
}

/*
})();
*/