const fibonacci = function(num) {
    num = Number(num);
    
    let num1 = 0;
    let num2 = 1;
    let total = 0;

    if(num < 0){
        total = 'OOPS';
    }
    if(num === 1){
        total = 1;
    }

    for(let i=2;i<=num;i++){
        total = num1 + num2;
        num1 =  num2;
        num2 = total;
    }
    return total;
};
fibonacci(2);
// Do not edit below this line
module.exports = fibonacci;
