const repeatString = function(wordToRepeat, repeatCount) {

    repeatedWord = '';

    if (repeatCount < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repeatCount; i++) {
        
        repeatedWord += `${wordToRepeat}`;
    }

    return  repeatedWord
};

// repeatString('hey', 3);
// repeatString('hello', 10);
// repeatString('hi', 1);
// repeatString('bye', 0);


// Do not edit below this line
module.exports = repeatString;
