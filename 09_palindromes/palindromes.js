const palindromes = function (input) {
    out = input;
    out = out.replace(/[.," "?!]/g, "");
    let putTheStringDownFlipItAndReverseIt = (str, idx = 0) => {
        return !str[idx + 1] ? str[idx]
                             : putTheStringDownFlipItAndReverseIt(str, idx + 1) + str[idx] 
    }
    
    return out.toLowerCase() == putTheStringDownFlipItAndReverseIt(out).toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
                      // idx is optional, starts at 0 if not set
function stringDown(str, idx = 0){
    // If index idx (starting at zero) does not exist in the string
    if(!str[idx]){
        // return the character at index idx
        return str[idx]
    }  // otherwise, if it does exist 
    else {
        // splice the character at string index idx,
        // and the result of this function, at the next index 
        return str[idx] + stringDown(str, idx + 1);
    }
}