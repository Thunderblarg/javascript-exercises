const repeatString = function(input, reps) {
    let outstring = "";
    if (reps < 0){
        outstring = "ERROR"        
    }
    else {
        for(idx = 0; idx < reps; idx++) outstring += input;
    }
    return outstring;
};

// Do not edit below this line
module.exports = repeatString;
