// sorted array
function binarySearch(arr, val){
    var start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end)/2);
     while(val !== arr[middle] && start <= end){
       if(val < arr[middle])end = middle - 1; 
       else start = middle + 1;
       middle = Math.floor((start + end)/2);
     }
     return arr[middle] !== val ? -1 : middle;
  }
  
  console.log(binarySearch([2,4,6,8,12,15,22,26,29,32,33], 15));