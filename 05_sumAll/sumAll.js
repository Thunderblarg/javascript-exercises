const sumAll = function(first, sec) {
    let min, max = null;
    let sum = typeof(first) != "number" || typeof(sec) != "number" ? "ERROR" 
            : first < 0                 || sec < 0                 ? "ERROR"
            : 0;
    min = first < sec ? first : sec;
    max = first > sec ? first : sec;
    for(idx = min; idx <= max; idx++) sum += idx;
    return isNaN(sum) ? "ERROR" : sum;
};

// Do not edit below this line
module.exports = sumAll;
