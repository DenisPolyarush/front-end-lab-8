const decypherPhrase = (obj, str) => {
    let arr = str.split('');
    return getTransformedArray(arr, function(val){
        for(let key in obj){
            if(val === obj[key]){
                 return key;
            }
        }
        return val;
    }).join('');
}