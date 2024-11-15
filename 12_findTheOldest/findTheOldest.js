const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(listOfPeople) {

    const oldest = listOfPeople.reduce((accumulator, currentPerson) => {
        const oldestAge = getAge(accumulator.yearOfBirth, accumulator.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return currentAge > oldestAge ? currentPerson : accumulator; 
    });
   return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
