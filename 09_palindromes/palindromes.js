const palindromes = function (word) {

    let cleanedWord = word
        .toLowerCase()
        .split('')
        .filter(element => 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(element))
        .join('');


    let reversedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reversedWord;

};

// Do not edit below this line
module.exports = palindromes;
