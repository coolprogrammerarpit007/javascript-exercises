const add = function (...nums) {
  let total = 0;
  nums.forEach((num) => {
    total = num + total;
  });
  return total;
};

const subtract = function (num1, num2) {
  let result = num1 - num2;
  return result;
};

const sum = function (nums) {
  let total = 0;
  if (nums.length === 0) {
    total = 0;
  } 
  else{
    nums.forEach((num)=>{
      total += num;
    })
  }
  console.log(total);
  return total;
};
sum([7,11]);

const multiply = function (nums) {
  let mul = 1;
  nums.forEach((num)=>{
    mul = mul * num;
  })
  return mul;
};

const power = function (num1,num2) {
  let result = Math.pow(num1,num2);
  return result;
};

const factorial = function (num) {
  let fact = 1;
  if(num === 0 || num === 1){
    fact = 1;
  }
  else{
    while(num > 0){
      fact = fact * num;
      num = num - 1;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
