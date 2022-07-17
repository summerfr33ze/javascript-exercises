const leapYears = function(year) {

if (year % 400 === 0){
    return true}

else if (year % 100 === 0){
    return false
}

else if (year % 4 === 0){
    return true
}

else {
    return false
}
    
        
};



//function argument is year
// determine whether year is divisible by 4
//if divisible by 4, determine whether divisble by 100
//if divisible by 100, determine if divisible by 400



// Do not edit below this line
module.exports = leapYears;
