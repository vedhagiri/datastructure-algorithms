// constant runtime
// Big O Notation : O(1)
function log(arr){
    console.log('---- Big O Constant Runtime -----');
    console.log(arr[0]);
    console.log(arr[1]);
    console.log('---- End -----');
}
log([2,4,5,6]);


// exponential Runtime
// Big O Notation: O(n^2)
function exponentialRuntime(arr){
    let x = 0;
    console.log('---- Big O Exponential Runtime -----');
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            x++;   
            console.log(`${x} : ${arr[i]} - ${arr[j]}`);
        }
    }
    console.log('---- End -----');
}

exponentialRuntime(['A', 'B', 'C']);
exponentialRuntime(['A', 'B', 'C', 'D', 'E', 'F', 'G']);