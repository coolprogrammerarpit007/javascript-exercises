const removeFromArray = function(arr,...nums) {
    // Algo to remove elements from the array
    nums.forEach((num,i)=>{
        let index;
        index = arr.indexOf(num);
        if(index<0){
            return;
        }
        arr.splice(index,1);

    })
    console.log(arr);
};

// removeFromArray([1,2,3,4],3);
// removeFromArray([1,2,3,4],3,2);
removeFromArray([1,2,3,4],7,9);
// Do not edit below this line
module.exports = removeFromArray;
