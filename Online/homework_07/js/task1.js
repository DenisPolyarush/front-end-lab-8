var n = Number(prompt('enter a number from 1 to 20', 1));
var result = '';
if(Math.sign(n) > 0 && Number.isInteger(n) && n <= 20 ){
    for(var i = 0; i < n; i++){
        var a = n - i;           
        for(var b = a; b > 0; b--){
            result += "   ";    
        }
        var c = (i*2)+1;
        for(var d = c; d > 0; d--){
            result += "[~]";    
        }
        result += "\n";
    }
console.log(result);
}else{
     console.error('Incorrect data');
}
    