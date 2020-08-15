function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

var time1 = performance.now();
addUpTo(100000000);
var time2 = performance.now();
console.log(`Time elapsed: ${(time2 - time1) / 1000} seconds.`);

