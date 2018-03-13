function getClosestZero (){
    let result = arguments[0];
    for(let i = 0; i < arguments.length; i++){
        if(Math.abs(arguments[i]) < Math.abs(result)){
            result = arguments[i];
        }
    }
    return result;
}