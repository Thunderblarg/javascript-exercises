const fibonacci = function(smallFib) {
    let mediumFalsification = 0;
    let bigLie = 1;
    if (isNaN(smallFib) || smallFib < 1) return "OOPS"; 
    for (idx = 0; idx < smallFib; idx++) {
        temporaryDeception = bigLie;
        bigLie = mediumFalsification + bigLie;
        mediumFalsification = temporaryDeception;
    }
    return mediumFalsification;
};

// Do not edit below this line
module.exports = fibonacci;
