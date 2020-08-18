
// return true if given string is palindrome
// racecar = racecar
//raccar
function isPalindrome(str){
    str = str.toLowerCase();
    const strArr = str.split('');
    const len = Math.floor(strArr.length / 2)
    for( var i = 0; i <= len; i++){
         if(strArr[i] !== strArr[(strArr.length - 1) - i]){
             return false
         }
    }
    return true;
}

console.log(isPalindrome('RaceCar'));
console.log(isPalindrome('TrySample'));