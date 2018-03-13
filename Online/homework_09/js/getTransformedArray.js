const getTransformedArray = (arr, callback) =>{
    let res = [];
    forEach(arr, function(val){
        res.push(callback(val));
    })
    return res;
};