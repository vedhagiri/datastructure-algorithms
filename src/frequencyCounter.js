
function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    var freqCounter1 = {}, freqCounter2 = {};
    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0 ) + 1;
    }
    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0 ) + 1;
    }
    
    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)) return false;
        //if()
    }

}


same([1,2,3,2,5], [9,1,4,4,25])