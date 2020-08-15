function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(var i = 0; i < arr1.length; i++){
        var idx = arr2.indexOf(arr1[i] ** 2);
        if(idx === -1){
            return false;
        } 
        arr2.splice(idx, 1);
            
    }
    return true;
 }
 
 // [1,3,2,2] [9,4,1,4]
 
 console.log(same([1,3,2,4], [9,4,1,4]));