const max = process.argv[2];
let FizzBuzz = function* (){
  let num = 0;  
  while(num < max){
    num++;  
    if(num % 15 === 0){
      yield 'FizzBuzz'
    }else if (num % 3 === 0){
      yield 'Fizz'
    }else if (num % 5 === 0) {
      yield 'Buzz'
    }else{
      yield num
    }
  }   
}();                          
                            
for (var n of FizzBuzz) {  
  console.log(n);  
}                                                       