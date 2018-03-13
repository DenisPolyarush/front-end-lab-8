var a = Number(prompt('Enter side 1', 0));
var b = Number(prompt('Enter side 2', 0));
var c = Number(prompt('Enter side 3', 0));

if(Math.sign(a) > 0 && Math.sign(b) > 0 && Math.sign(c) > 0){
    if(a + b <= c || b + c <= a || a + c <= b){
        console.log('Incorrect data');
    }else{
        var p = (a + b + c) / 2;
        var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        console.log(parseFloat(area.toFixed(2)));
    };
}else{
    console.log('Incorrect data');
};

if(Math.sign(a) > 0 && Math.sign(b) > 0 && Math.sign(c) > 0){
    if(a + b <= c || b + c <= a || a + c <= b){
        console.log('Incorrect data');
    }else if(a == b && a == c && b == c){
        console.log('Equilateral');
    }else if((a == b && a !=c) || (a == c && a != b) || b == c && b != a){
        console.log('Isosceles');
    }else if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
        console.log('Right triangle');
    }else if(a != b && a != c && b != c ){
        console.log('Scalene ');
    }
}else{
    console.log('Incorrect data');
}

