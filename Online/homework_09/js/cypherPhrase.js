const cypherPhrase = (obj, str) => {
    let arr = str.split('');
    return getTransformedArray(arr, function(val){
        for(let key in obj){
            if(val === key){
                return obj[key];
            }
        }
        return val;
    }).join('');
}