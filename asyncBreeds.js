const fs = require('fs');

// Moral is to utilize callback functions rather than returning values. 
const breedDetailsFromFile = function(breed, someFunction) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) someFunction(data); // CHANGE: NO MORE RETURNS
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE: we try to get the return value
breedDetailsFromFile('Bombay', printOutCatBreed);