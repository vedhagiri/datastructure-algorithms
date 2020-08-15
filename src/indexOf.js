function indexOf(arr, value){
    if(arr.length === 0 || !value) return -1;
    
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === value)
          return i;
    }  
    return -1;  
  }
  
  console.log(indexOf([], 22));