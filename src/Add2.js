function addupTo(n){
    return n* (n+1) /2;
 }
 
 var time1 = performance.now();
 addupTo(1000000000);
 var time2 = performance.now();
 console.log(`time Elapsed: ${(time2-time1) / 1000} seconds.`)