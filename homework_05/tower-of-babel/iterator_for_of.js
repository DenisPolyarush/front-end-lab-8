const max = process.argv[2];
let FizzBuzz = {           
  [Symbol.iterator]() {    
    let num = 0;                                      
    return {                                                    
      next() {                                                  
        num++;  
        
        if(num <= max){
          if (num % 15 === 0) return { done: false, value: 'FizzBuzz' };
          if (num % 3 === 0) return { done: false, value: 'Fizz' };    
          if (num % 5 === 0) return { done: false, value: 'Buzz' };  
          return { done: false, value: num };
        }
        return { done: true };                                  
      }                                                         
    }                                                           
  }                        
}                          
                            
for (var n of FizzBuzz) {  
  console.log(n);
}