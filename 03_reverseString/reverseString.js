const reverseString = function(phrase) {

    let reversed = phrase.split('');
    reversed.reverse();
    let joined = reversed.join('');

    return joined;

};

// Do not edit below this line
module.exports = reverseString;
