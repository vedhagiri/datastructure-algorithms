// input could be anything string
// output print first char to center and create like a diamond.
//              1
//             222 
//            33333  
//           4444444   
//            33333  
//             222
//              1

// var space = limit;
//                 for (i = 1; i <= limit; i++) {
//                     for (j = 1; j <= space; j++) {
//                         document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
//                     }
//                     space--;
//                     for (j = 1; j <= 2 * i - 1; j++) {
//                         document.getElementById("result").insertAdjacentHTML('beforeend', '*');
//                     }
//                     document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
//                 }

function printDiamond(str){
    //var charsArr = str.split(''), len = charsArr.length;
    var limit = 6;
    var space = limit;
    for(var i = 1; i <= limit; i++){
       for(var j = 1; j <= space; j++){
           console.log(j+i);
       }
       space--;
       for(var j = 1; j <= 2 * i - 1; j++){
           console.log('*'+ j);
       } 
    }   
      
}

printDiamond("1234");