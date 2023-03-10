/*
(function() {
*/


    "use strict";
    console.log("The file 'objects.js' is successfully linked.");
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Josh",
        lastName: "Mantz",
    };

    console.log("The person's first name is: " + person.firstName +".");
    console.log("The person's last name is: " + person.lastName +".");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function() {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180,
        },

        {
            name: 'Ryan',
            amount: 250,
        },

        {
            name: 'George',
            amount: 320,
        }
    ];
    function discountCheck(shoppers) {
        shoppers.forEach(function (shopper) {
            if (shopper.amount >= 200) {
                console.log(shopper.name + " spent $" + (shopper.amount).toFixed(2) + ". This qualifies for a 12% discount. The new total is: $" + (shopper.amount * .88).toFixed(2));
            } else {
                console.log(shopper.name + " spent $" + (shopper.amount).toFixed(2) + ". Spend $" + (200.00 - (shopper.amount)).toFixed(2) + " dollars more to qualify for a 12% discount.");
            }
        });
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: 'The City of God',
            author: {
                firstName: 'Saint',
                lastName: 'Augustine',
            },
        },

        {
            title: 'The Creative Mind',
            author: {
                firstName: 'Henri',
                lastName: 'Bergson',
            },
        },

        {
            title: 'The Perennial Philosophy',
            author: {
                firstName: 'Aldous',
                lastName: 'Huxley',
            },
        },

        {
            title: 'The Red Book',
            author: {
                firstName: 'Carl',
                lastName: 'Jung',
            },
        },

        {
            title: 'Towards a Psychology of Being',
            author: {
                firstName: 'Abraham',
                lastName: 'Maslow',
            },
        },

        {
            title: 'Psychology of the Future',
            author: {
                firstName: 'Stanislav',
                lastName: 'Grof',
            },
        },

        {
            title: 'The Hero with a Thousand Faces',
            author: {
                firstName: 'Joseph',
                lastName: 'Campbell',
            },
        },

        ];

        console.log(books[0].title);
        console.log(books[0].author.firstName);
        console.log(books[0].author.lastName);

        console.log(books[1].title);
        console.log(books[1].author.firstName);
        console.log(books[1].author.lastName);

        console.log(books[2].title);
        console.log(books[2].author.firstName);
        console.log(books[2].author.lastName);

        console.log(books[3].title);
        console.log(books[3].author.firstName);
        console.log(books[3].author.lastName);

        console.log(books[4].title);
        console.log(books[4].author.firstName);
        console.log(books[4].author.lastName);

        console.log(books[5].title);
        console.log(books[5].author.firstName);
        console.log(books[5].author.lastName);

        console.log(books[6].title);
        console.log(books[6].author.firstName);
        console.log(books[6].author.lastName);


/**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function bookList (books) {
        books.forEach(function (book, index) {
            console.log("Book # " + (index + 1));
            console.log("Title: " + book.title);
            console.log("Author " + book.author.firstName + " " + book.author.lastName);
        })
        }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook (title, first, last) {
        return {
            title: title,
            author: {
                firstName: first,
                lastName: last
            }
        }
    }

    var libraryArray = [
        createBook("Memories, Dreams, Reflections", "Carl", "Jung"),
        createBook("The Structure of Scientific Revolutions", "Thomas", "Kuhn"),
        createBook("Saving the Appearances", "Owen", "Barfield"),
        createBook("Holotropic Breathwork", "Stanislav", "Grof"),
        createBook("Journey of the Universe", "Brian", "Swimme")
    ];

    var newEntryTitle = prompt("Please enter a book title");
    var newEntryAuthorFirst = prompt("Please enter the author\'s first name.");
    var newEntryAuthorLast = prompt("Please enter the author\'s last name.");

    libraryArray.push(createBook(newEntryTitle, newEntryAuthorFirst, newEntryAuthorLast));

    function showBookInfo(book) {
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    }

    libraryArray.forEach(function(book, index) {
        console.log("Book # " + (index +1));
        showBookInfo(book);
    })


/*
})();
*/