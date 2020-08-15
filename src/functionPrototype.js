
window.clear();
Array.prototype.myUsecase = function(){
    
    var res = [];

    for (var i = 0; i < this.length; i++){
        res.push(this[i] * 2);
    }    
        
    return this.concat(res);
}

var arr = [1, 2, 4];

console.log((arr.myUsecase()).push(1234));
console.log(arr);


String.prototype.ss = function(){
    return this.toUpperCase();
}

var sst = "samplesdfsdfsdf"

console.log(sst.ss());

console.log(sst);

