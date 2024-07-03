const sumAll = function(num1,num2) {

    // checking if any argument is less than 0
    if(num1 < 0 || num2 < 0){
        return `ERROR`;
    }

    // checking if argument is string or not
    if(typeof num1 === `string` || typeof num2 === `string`){
        return 'ERROR';
    }
    // checking if any parameter is non inteer
    if(isNaN(num1) || isNaN(num2)){
        return `ERROR`;
    }
    // checking if num1 is lessar than num2 if not then swap it
    if(num1>num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let total = 0;
    for(let i=num1;i<=num2;i++){
        total += i;
    }
    return total;
};

sumAll(123,1)

// Do not edit below this line
module.exports = sumAll;
