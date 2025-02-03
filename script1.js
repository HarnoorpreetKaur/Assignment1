// Tanvi Bawa - 200562669
// Javascript Frameworks - Assignment#1

//  To create a JavaScript file to use the Node.JS built-in function to read text file contents (Non Blocking function)

//First: we will insert, add the "fs";

//CJS (Common JS)
const fs = require('node:fs');

/* Second method is: MJS (Module js)
import fs from 'node:fs';*/

// to read the file we have : readFile() - Non Blocking function and readFileSync() - Blocking function

// we will use readFile() - the non blocking function

fs.readFile('./text.txt','utf8',(err, data) =>{ // to get data from the text.txt file , utf8 is used to convert binary data to readable format for us

    if(err){ // if there exists an error, this message will be printed and  the error will also be shown using "err"

        // error message:
        console.log("The file cannot be read. " +err);

    } else{ // if there is no error then print the contet from the text file.

        console.log("The fiel content is:" +data);
    }
});

// Aditional message to be printed to demonstrate the non blocking function
console.log("Assignment to use the Node.JS built-in function to read text file content");

console.log("Assignment by Group 2 : Memebers : Tanvi Bawa, Harnoorpreet Kaur, Diksha Diksha")