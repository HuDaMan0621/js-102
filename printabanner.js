// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. 
// The border has to stretch to the length of the text.

// printBanner('Welcome to DigitalCrafts');
// ****************************
// * Welcome to DigitalCrafts *
// ****************************


function printBanner(str){
    const length = str.length 
    const top = "*".repeat(length + 4) + "\n"
    const banner = `* ${str} * \n`; 

    console.log(top + banner + top);
}

printBanner("Welcome to DigitalCrafts")