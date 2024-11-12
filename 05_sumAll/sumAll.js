const sumAll = function(num1, num2) {

    if (typeof num1 !== "number" || 
        typeof num2 !== "number" || 
        num2 < 0 ||
        num1 < 0 ||
        typeof num1 === "float" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) 
    ) {
        return "ERROR";
    };

    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    };

    let sum = 0;

    for (let i = 0; i < num2; i++) {
        sum += num1;
        num1++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
