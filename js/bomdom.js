'use strict';

console.log("The file 'bomdom.js' is linked.");

'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop


var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);


