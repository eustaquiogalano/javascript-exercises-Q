const fibonacci = function(fibonacciNumber) {

    let verifiedNumber;

    if (typeof fibonacciNumber === 'string') {
       verifiedNumber = parseInt(fibonacciNumber);
    } else {
        verifiedNumber = fibonacciNumber;
    }  


    if (verifiedNumber < 0) return "OOPS";
    if (verifiedNumber === 0) return 0; 

    let previous = 1;
    let present = 0;
    let result = 0;

    for (let i = 0; i < verifiedNumber; i++) {
        
        result = present + previous;
        previous = present;
        present = result;

    }

    return result;
    
};

// Do not edit below this line
module.exports = fibonacci;
