const removeFromArray = function(inArray, ...removals) {
    let outArray = inArray;
    removals.forEach((item) => { if (outArray.indexOf(item) > -1) outArray.splice(inArray.indexOf(item), 1)});
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
