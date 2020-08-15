
function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let lookup={};
    for(let chr of str1){
        lookup[chr] = (lookup[chr] || 0) + 1;
    }
    var obj = {a:1, b:2};
    console.log(obj['x']);
    if(obj['x']){
        console.log("if 0 is true")
    }else {
        console.log("0 is false")
    }
    for (let chr of str2){
          
        if(!lookup[chr]){
            return false;
        }else {
            lookup[chr]--;
        }
    }
    return true;
  }
  
  console.log(validAnagram('xaazz', 'zaaxz'));