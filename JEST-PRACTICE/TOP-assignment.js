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
    arrOfIndeces.push(plainText.indexOf(char));
  }

  // this array holds all the equivalent encrypted character
  let encryptedElements = [];

  // get each index
  // get the equivalent element in cyphertext alphabet (shifted)
  // and add each element in encryptedElements array
  for (let element of arrOfIndeces) {
    encryptedElements.push(shifted[element]);
  }

  // combine the while array
  // and send the result
  return encryptedElements.join("");
}

module.exports = {
  capitalizeString,
  reverseString,
  calculator,
  ceaserCypher,
};
