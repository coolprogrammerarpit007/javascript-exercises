const removeFromArray = function(arr,...nums) {
    // Algo to remove elements from the array
    nums.forEach((num,i)=>{
        // counting the number of occurances
        const count = arr.filter((number) => number === num ).length;
        let index;
        index = arr.indexOf(num);
        if(index<0){
            return;
        }
        arr.splice(index,count);

    })
    return arr;
};

// removeFromArray([1,2,3,4],9);
// removeFromArray([1,2,3,4],9,2);
// removeFromArray([1,2,3,4],1,2,3,4);
// removeFromArray([1,2,3,4],3);
// removeFromArray([1,2,3,4],3,2);
// removeFromArray([1,2,3,4],7,9);
// removeFromArray([2,2,3,4],2);
// removeFromArray([2,2,3,4],1,2,3,4);
// Do not edit below this line
module.exports = removeFromArray;
