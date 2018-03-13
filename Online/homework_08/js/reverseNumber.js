function reverseNumber(num){
    let result;
    if(num > 0){
        result = num.toString().split('').reverse().join('');
    }else{
        result = '-' + num.toString().split('').slice(1, num.length).reverse().join('');
    }
    return Number(result);
}