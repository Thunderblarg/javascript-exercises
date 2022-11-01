const leapYears = function(year) {
    return year % 4   != 0 ? false 
         : year % 100 == 0 ? year % 400 == 0 ? true
                                             : false 
                           : true;
};

// Do not edit below this line
module.exports = leapYears;
