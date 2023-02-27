
/*
(function() {
*/

    "use strict";
    console.log("The \'circle.js\' file is successfully linked.");

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            return Math.PI*(Math.pow(circle.radius, 2)); //This calculation is accurate (= 28.27433)
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                var areaRounded = Math.round(circle.getArea());
                return ("The area of a circle with radius of " + circle.radius + " is " + areaRounded)  //This calculation is accurate (= 28);
            } else {
                var areaTrue = circle.getArea();
                return ("The area of a circle with radius of " + circle.radius + " is: " + areaTrue);
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

/*
})();
*/