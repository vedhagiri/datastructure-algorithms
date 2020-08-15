function bubbleSort(arr){
    for(var i = arr.length - 1; i > 0; i--){
        for(var j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
//console.log("FinalOutput:",bubbleSort([8, 3, 10, 4, 6, 9]));
console.log("FinalOutput:",bubbleSort([-8, 3, -10, 4, 6, 9, 0, 23, 81]));
//console.log("FinalOutput:",bubbleSort([8, 3, 10, 4, 6, 9]));