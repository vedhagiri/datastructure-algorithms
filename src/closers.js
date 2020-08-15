window.clear();
// function buildFunctions(){

//     var arr = [];

//     for (var i = 0; i < 3; i++){

//         arr.push(
//             (function(j){
//                 return function(){
//                     console.log(j);
//                 }
//             }(i))
//         );
//     }

//     return arr;
// }

// var fs2 = buildFunctions();

// console.log(fs2);
// fs2[0]();
// fs2[1]();
// fs2[2]();

// Array Map function changes.arr

var customMapFun = function(arr, callbackfn){

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {

        newArr.push(callbackfn(arr[i], i));
    }

    return newArr;

}

var concatArrFun = function(arr){

   var respArr = customMapFun(arr, function(item, key){
       return item * 2;
   });
   return arr.concat(respArr); 

}

var multiplyByTwo = function(item, key){
    return item * 2;
}

var arr2 = customMapFun([1,2,3,4,5,6], multiplyByTwo);

console.log(arr2);


var checkPastLimitSimplifed = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}

var arr3 = customMapFun([1,2,3,4,5,6,7,8], checkPastLimitSimplifed(3));

console.log(arr3);


console.log(concatArrFun([1,2,3,4,5,6]));




