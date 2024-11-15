const getTheTitles = function(listOfBooks) {

    let listOfBookNames = [];

    for (let i = 0; i < listOfBooks.length; i++) {

        listOfBookNames.push(listOfBooks[i].title);

    }

    return listOfBookNames;

};

// Do not edit below this line
module.exports = getTheTitles;
