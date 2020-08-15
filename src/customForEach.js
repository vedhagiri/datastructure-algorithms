function customForEach(arr, fn){
    var len = arr.length, res= [];
    for(var i = 0; i < len; i++){
        if( arr[i] % 2 === 0)
            res.push(arr[i]);
    }
    fn(res);
}

function test(arr){
    customForEach(arr, function(customItems){
        console.log(customItems);
        sadsfasd
        asdfasd
        asdfadsf
        asdfasdf
        
    })
}

test([1,2,3,4, 100, 500, 232,233])