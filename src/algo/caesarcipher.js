
function caesarCipher(str, num){
    let resultStr = [];
    const alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // num = num % 26;

    for(var i = 0; i < str.length; i++){
        let charIdx = alphaArr.indexOf(str[i]);
        if( charIdx !== -1){
            resultStr.push(alphaArr[((charIdx + num) % 26)]);
        }else {
            resultStr.push(str[i]);
        }
    }
    console.log(resultStr.join(''));

}

caesarCipher('azssaoo keeper', 2); // 'bqq mggrgt'



function caesarCipher1(str,num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';
    
    for (var i = 0; i < lowerCaseString.length; i++) {
      var currentLetter = lowerCaseString[i];
      if (currentLetter === ' ') {
        newString += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      if (str[i] === str[i].toUpperCase()) {
        newString += alphabet[newIndex].toUpperCase();
      }
      else newString += alphabet[newIndex];
    };
    
    return newString;
  }
  caesarCipher1('Zoo Keeper', 2);