let min = 0,            //minimum input value
    max = 5,            //maximum input value
    attempt = 3,        //number of attempts
    total = 0,          //current winnings
    prizes = 10,        //the amount that can be won at a certain stage
    maxPrize = 10;      //the maximum amount that can be won on the first attempt

if(confirm("Do you want to play a game?")){
//Start game
    while(true){
        let rand = Math.floor(Math.random() * (max + 1));
        let num = prompt("Enter a number from " + min + " до " + max + "\n" + "Attemts left: " + (attempt) + "\n" + "Total prize: " + total + "$\n" + "Possible prize in current attempt: " + prizes + "$");
//check for correctness of input and checking whether the user has guessed the number or not
        if(Number(num) === rand && !isNaN(parseFloat(num))){
            total += prizes;
            attempt = 3;
            console.log('You win Your prizes '+ total + '$')
//if the player has guessed the number, the maximum win is multiplied by 3 and the range of numbers by 2
            if(confirm("Do you want to play a game?")){ 
                maxPrize *= 3;
                prizes = maxPrize;
                max *=2;
            }else{ //if lost, then the player has the opportunity to play again
                console.log('Thank you for a game. Your prize is: ' + total + '$');
                if(confirm('Do you want try again?')){
                     min = 0;
                     max = 5;
                     attempt = 3;
                     total = 0;
                     prizes = 10;
                     maxPrize = 10;
                }else{
                    break;
                }
            }
        }else{ //with each incorrect entry, the player is discarded, and the possible win is divided by 2
            attempt--;
            prizes = Math.floor(prizes / 2);
            
            if(attempt == 0){
                console.log('Thank you for a game. Your prize is: ' + total + '$');
                if(confirm('Do you want try again?')){
                     min = 0;
                     max = 5;
                     attempt = 3;
                     total = 0;
                     prizes = 10;
                     maxPrize = 10;
                }else{
                    break;
                }
            }
        }
    }
}else{ //Game over
    console.log('You did not become a millionaire'); 
}