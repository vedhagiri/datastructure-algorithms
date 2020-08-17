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


// logarthmic Runtime
// Big O Notation : O(log n)
const binarySearch = (arr, key) => {
    let low = 0, high = arr.length -1, mid, element;

    while (low <= high){
        mid = Math.floor((low + high) / 2, 10);
        console.log(mid);
        element = arr[mid];

        if(element < key ){
            low = mid + 1;
        } else if (element > key){
            high = mid -1;
        }else {
            return mid;
        }

    }

    return -1;
}
const st = binarySearch([1,2,3,5,6,7,8,9], 4);

console.log(st);