function sameFreqPattern(arr1, arr2){
    if(arr1.length !== arr2.length)
      return false;
    var frequencyCount1 = {}, frequencyCount2 = {};
    for(var chr in arr1){
        frequencyCount1[arr1[chr]] = ++frequencyCount1[arr1[chr]] || 1;
    }
    for(var chr in arr2){
        frequencyCount2[arr2[chr]] = ++frequencyCount2[arr2[chr]] || 1;
    }
    
    for(var key in frequencyCount1){
      if(!(key ** 2 in frequencyCount2)){
          return false
      }
      if(frequencyCount2)
      if( key === frequencyCount2[key ** 2]){
          if(frequencyCount1[key] !== frequencyCount2[key]){
              return false;
          }
      }else {
          return false;
      }    
    }
    return true;
  //   console.log(frequencyCount1, frequencyCount2);
  
  
  
  }
  
  console.log(sameFreqPattern([1,3,2,2], [9,4,1,4]));