const findTheOldest = function(people) {
    let oldest;
    people.forEach((person) => {
        if(!oldest) {
            oldest = person;
            if(!oldest.yearOfDeath) oldest.yearOfDeath = (new Date()).getFullYear();
        }
        else {
            if (person.yearOfDeath){
                if( oldest.yearOfDeath - oldest.yearOfBirth <
                    person.yearOfDeath - person.yearOfBirth )   { oldest = person;} }
            else {
                if( oldest.yearOfDeath     - oldest.yearOfBirth <
                (new Date()).getFullYear() - person.yearOfBirth ){oldest = person;} }
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
