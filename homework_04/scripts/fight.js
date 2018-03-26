function start (champion, monster){
  var round = 0;
  if(champion instanceof Fighters && monster instanceof Fighters){
    
    while(champion.isAlive() && monster.isAlive()){
      round++;
      console.log(`      ROUND ${round}`);

      skills(champion, monster);

      if(monster.isAlive()){
        skills(monster, champion);
      }
    }
  }else{
    throw new TypeError(`Incorect data`)
  }
}

function skills(firstFighter, secondFighter){
  var random = Math.random();
  if(random < 0.15){
    if(firstFighter instanceof Champion){
      firstFighter.heal();
      console.log(`${firstFighter.name} uses Heal`)
    }else{
      firstFighter.enrage();
      console.log(`${firstFighter.name} uses Enrage`)
    }
  }else if(random > 0.15 && random < 0.4){
    if(firstFighter instanceof Champion){  
      firstFighter.defence();
      console.log(`${firstFighter.name} uses Defence`)
    }else{
      if(firstFighter.getHitpoints() > 5){
        firstFighter.fury();
        console.log(`${firstFighter.name} uses Fury`)
      }else{
        firstFighter.fight(secondFighter)
    console.log(`${firstFighter.name} attacks ${secondFighter.name}. 
${secondFighter.name} has ${secondFighter.getHitpoints()} hitpoints`)
      }
    }
  }else{
    firstFighter.fight(secondFighter)
    console.log(`${firstFighter.name} attacks ${secondFighter.name}. 
${secondFighter.name} has ${secondFighter.getHitpoints()} hitpoints`)
  }
}

start(beast, hunter);