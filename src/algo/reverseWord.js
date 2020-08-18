
function reverseWords(str){
    var words = str.split(' ');
    let result = [];

    words.forEach((word) => {
        result.push(word.split('').reverse().join(''));
    });
    return result.reverse().join(' ');
}

console.log(reverseWords('abc xyz'));

console.log(reverseWords('Coding JavaScript'));