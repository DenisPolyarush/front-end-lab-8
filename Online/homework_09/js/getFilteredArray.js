const getFilteredArray = (arr, callback) => {
    let res = [];
    forEach(arr, function(val){
        if(callback(val)){
            res.push(val);
        }
    })
    return res;
};