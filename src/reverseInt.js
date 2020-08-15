
// Given an integer, return as an integer that is the reverse order of number.

// solution #1
function reverseInt1(num){
    var numStr = num.toString().split(''), newNumStr ='';
    if(numStr[0] === '-'){
        numStr.splice(0,1);
        newNumStr = '-';
    } 
    console.log(numStr);
    for(var i = numStr.length - 1; i >= 0; i--){
         newNumStr += numStr[i];
    }
    return parseInt(newNumStr);
}
// solution #2
function reverseInt2(num){
    var numStr = num.toString().split(''), newNumStr ='';
    console.log(numStr);
    for(var i = numStr.length - 1; i >= 0; i--){
         newNumStr += numStr[i];
    }
    if(num < 0)
        return parseInt(newNumStr) * -1;
    
    return parseInt(newNumStr);
}

// solution #3
function reverseInt3(num){
    var reversed = num.toString().split('').reverse().join('');
    if(num < 0)
        return parseInt(reversed) * -1;
    
    return parseInt(reversed);
}


// solution #4
function reverseInt4(num){
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}



//reverseInt4(453);
reverseInt4(-3022345623);