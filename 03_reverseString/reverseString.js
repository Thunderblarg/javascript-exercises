const reverseString = function(input) {
    output = "";
    for (idx = input.length - 1; idx >= 0; idx--) output += input[idx];
    return output;
};

// Do not edit below this line
module.exports = reverseString;
