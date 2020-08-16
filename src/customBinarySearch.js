// binary search algo

// find the index by sorted array
// [2, 4, 6, 8, 10], 8
// 
function bSearch(arr, val){

    var idx = -1;   

    // edgecase
    if( arr.length === 0) return idx;

    var start = 0, end = arr.length - 1, mid = Math.floor( (start + end) / 2);

    while ( val !== arr[mid] && start <= end){
        // 8 < 6
        if(val < arr[mid]) end = mid - 1;
        else start = mid + 1;
        // move the middle pointer based on the condition.
        mid = Math.floor( (start + end) / 2);
    }

    return val !== arr[mid] ? -1 : mid;
}

