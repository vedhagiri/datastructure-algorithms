// Given a string return true if the string is a palindrome
// Or false if it is not. Palindromes are string that from same word if it is reversed.
// *Do* Including space and punctuation in determining if the string is a palindrome.

// solution #1
function isPalindrome(str){
    return str === str.split('').reverse().join('');
}  

// solution #2
// remove the special char and space
// using regular expression 
function isPalindrome(str){
    str = str.replace(/[^a-zA-Z]/g, '');
    return str === str.split('').reverse().join('');
}


// solution #3
// remove the special char and space
function isPalindrome(str){
   var strArr = str.toLowerCase().split('');
   var charArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
   var newStr = '', revStr, inpStr= '';
    for(var i = strArr.length - 1; i >= 0; i--){
        if(charArr.indexOf(strArr[i]) !== -1){
            newStr += strArr[i];
            inpStr += strArr[strArr.length - (i + 1)];
        }
    }
    return newStr === inpStr;
}

// solution #5
function isPalindrome(str){
    var strArr = str.toLowerCase().split('');
    var charArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i = strArr.length - 1; i >= 0; i--){
        if(charArr.indexOf(strArr[i]) !== -1){
            console.log((i + ": " + strArr[i]),(strArr.length - (i + 1) + ": " + strArr[strArr.length - (i + 1)]))
            if(strArr[i] !== strArr[strArr.length - (i + 1)])
                return false;
        }
    }
    return true;
}

// solution #6
function isPalindrome(str){
    var strArr = str.toLowerCase();   
    var charArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i = strArr.length - 1; i >= 0; i--){
        if(charArr.indexOf(strArr[i]) !== -1){
            console.log((i + ": " + strArr[i]),(strArr.length - (i + 1) + ": " + strArr[strArr.length - (i + 1)]))
            if(strArr[i] !== strArr[strArr.length - (i + 1)])
                return false;
        }
    }
    return true;
}

// // solution #7
// some issue with condition 
function isPalindrome(str){
    var strArr = str.toLowerCase();
    var strLen = Math.floor(strArr.length / 2);
    var charArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i = 0; i < strLen; i++){
        if(charArr.indexOf(strArr[i]) !== -1){
            console.log((i + ": " + strArr[i]),((strArr.length - 1) - i+ ": " + strArr[(strArr.length - 1) - i]))
            if(strArr[i] !== strArr[(strArr.length - 1) - i])
                return false;
        }
    }
    return true;
}

// window.clear();
// solution #8
function isPalindrome(str){
    var strArr = str.toLowerCase();
    var charArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';
    for(chr in strArr){
        if(charArr.indexOf(strArr[chr]) !== -1)
            newStr += strArr[chr];
    }
    var strLen = Math.floor(newStr.length / 2);
    for(var i = 0; i < strLen; i++){
        console.log((i + ": " + newStr[i]),((newStr.length - 1) - i+ ": " + newStr[(newStr.length - 1) - i]))
        if(newStr[i] !== newStr[(newStr.length - 1) - i])
            return false;
    }
    return true;
}

console.log(isPalindrome("rAc @# C#ar")); // raccar
console.log(isPalindrome("giri"));

