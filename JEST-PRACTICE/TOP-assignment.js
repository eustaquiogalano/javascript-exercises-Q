function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function ceaserCypher(string, shiftFactor) {
  const plainText = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // get a copy of the plaintext alphabet
  let plainTextCopy = [...plainText];

  // elements in the array that is to be shifted at the end
  // of the cyphertext alphabet
  let shifting = plainTextCopy.splice(0, shiftFactor);

  // this is the Cyphertext Alphabet
  let shifted = plainTextCopy.concat(shifting);

  // this array stores all the indeces of each char
  // based on plaintext alphabet
  let arrOfIndeces = [];

  // get each index of each char of the given string
  // and put it in arrOfIndeces array
  for (let char of string) {
    arrOfIndeces.push(plainText.indexOf(char.toLowerCase()));
  }

  // this array holds all the equivalent encrypted character
  let encryptedElements = [];

  // get each index
  // get the equivalent element in cyphertext alphabet (shifted)
  // and add each element in encryptedElements array
  for (let e = 0; e < arrOfIndeces.length; e++) {
    if (isAlphabet(shifted[arrOfIndeces[e]])) {
      encryptedElements.push(shifted[arrOfIndeces[e]]);
    } else {
      encryptedElements.push(string[e]);
    }
  }

  for (let charIndex = 0; charIndex < string.length; charIndex++) {
    if (string[charIndex] === string[charIndex].toUpperCase()) {
      encryptedElements = uppercaseCharAt(encryptedElements, charIndex);
    }
  }

  let encryptedMessage = encryptedElements.join("");

  // combine the while array
  // and send the result
  return encryptedMessage;
}

function uppercaseCharAt(array, index) {
  let currentElement = isAlphabet(array[index])
    ? array[index].toUpperCase()
    : array[index];
  array.splice(index, 1, currentElement);
  return array;
}

function isAlphabet(element) {
  return /^[a-zA-Z]$/.test(element);
}

function analyzeArray(array) {
  return {
    average: getAverage(array),
    min: getMinimum(array),
    max: getMaximum(array),
    length: array.length,
  };
}

function getAverage(array) {
  let sum = array.reduce((accumulator, currentElement) => {
    return accumulator + currentElement;
  });
  return sum / array.length;
}

function getMinimum(array) {
  let minimum = array[0];
  for (let currentElement of array) {
    if (currentElement < minimum) {
      minimum = currentElement;
    }
  }
  return minimum;
}

function getMaximum(array) {
  let maximum = array[0];
  for (let currentElement of array) {
    if (currentElement > maximum) {
      maximum = currentElement;
    }
  }
  return maximum;
}

module.exports = {
  capitalizeString,
  reverseString,
  calculator,
  ceaserCypher,
  analyzeArray,
};
