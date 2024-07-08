const palindromes = function (str) {
    str = str.toLowerCase().replace(/[.,\/#!$%\^&\s+\*;:{}=\-_`~()]/g,"");
    revseseStr = ``;
    let flag = false;
    for(let i=str.length-1;i>=0;i--){
        revseseStr += str[i];
    }

    if(str === revseseStr){
        flag = true;
    }


    // console.log(str);
    // console.log(revseseStr);
    return flag;
};

// palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
