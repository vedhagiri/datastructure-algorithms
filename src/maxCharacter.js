// window.clear();
// Given a string, return a character that is most commonly used in the string
// example maxChar("abcccccccas") === "c"

// solution #1
function maxChar(str){
    var strCountObj = {}, strArr = str.split('');
    for(var chr in strArr){
        var char = strArr[chr];
        if(!strCountObj[char]){
            strCountObj[char] = 1;
        }else {
            strCountObj[char]++;
        }
    }
    var cuc = '', count = 0;
    for(var c in strCountObj){
            
        if(strCountObj[c] > count){
            count = strCountObj[c];
            cuc = c;
        }
    }    
    return cuc;
}

// solution #2
function maxChar(str){
    var strCountObj = {}, strArr = str.split(''), count = 0, cuc = "";
    for(var chr in strArr){
        var char = strArr[chr];
        if(!strCountObj[char]) 
            strCountObj[char] = 0;
        strCountObj[char]++;
        if(strCountObj[char] > count){
           count = strCountObj[char];
           cuc = char; 
        }
    }
    return cuc;
}

// solution #3
function maxChar(string){
    var chars = {}, 
        max = 1, 
        maxChar = 'OOPS!!!! No commonly used "Character" found...';
    for(var char of string){
        chars[char] = chars[char] + 1 || 1;
        if(chars[char] > max){
            max = chars[char];
            maxChar = char;
        }
    }
    return maxChar;
}

maxChar("abcc 11123555555555");

maxChar("1234423423413141234134");

//maxChar("function returns the sign of a number, indicating whether the number is positive, negative or zero")