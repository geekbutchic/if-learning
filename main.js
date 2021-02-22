/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

isItLong = (str) => {
  if (str.length > 20) {
    return "That's a long string!"
  }
}
// Return undefined not needed 
isItMedium = (str) => {
  if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  }
}
// Inclusive less than or equal too.

isItShort = (str) => {
  if (str.length < 10) {
    return "That's a small string!"
  } else if (str.length >= 10) {
    return "That's not a small string!"
  }
}

howLongIsMyString = (str) => {
  if (str.length > 20) {
    return "That's a long string!"
  } else if (str.length >= 10) {
    return "That's a regular sized string!"
  } else return "That's a small string!"
}

instructorHeight = (height) => {
  if (height === 'Colin') {
    return 62;
  } else if (height === 'Mesuara') {
    return 69;
  } return "I don't know that instructor!"
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}