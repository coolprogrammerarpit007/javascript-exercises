const leapYears = function(year) {
    // checking if a year is century year or not 
    let flag = true;
    if(year % 100 === 0){
        if(year % 400 === 0){
            return flag;
        }
        else{
            flag = false;
            return flag;
        }
    }
    else if(year % 4 === 0){
        return flag;
    }
    else {
        flag = false;
        return flag;
    }

    return flag;
};

// Do not edit below this line
module.exports = leapYears;
