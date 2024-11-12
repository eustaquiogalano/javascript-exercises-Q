const removeFromArray = function(arr, ...valuesToRemove) {

    let newList = arr.filter((element) => {
        if (valuesToRemove.includes(element)) {
            return false;
        }
        return true;
    });

    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
