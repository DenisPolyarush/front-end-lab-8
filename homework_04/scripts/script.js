// Task 1
function assign(target) {
  
  for (var i = 1; i < arguments.length; i++) {
    for(var key in arguments[i]){
      target[key] = arguments[i][key]
    }
  }
  return target;
}

var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = assign({}, defaults, options); // -> {width: 150, height: 100}

// Task 2
function Fighters(obj){
  this.name = obj.name;
  this.attack = obj.attack;
  this.hitpoints = obj.hitpoints;
  this.totalHitpoints  = obj.hitpoints;
}
Fighters.prototype.fight = function(fighter){
  if(fighter instanceof Fighters && fighter !== this){
    
    if(this.isAlive()){
      
      if(fighter.isAlive()){
        
        if(fighter._defence){
          console.log(`Damage is blocked`);
          return fighter._unBlocked();
        }
        
        return fighter.hitpoints -= this.attack;
      }else{
        console.log(`${fighter.name} is daed`);
        return;
      }
    }else{
      return;
    }
  }else{
    throw new TypeError(`The ${this.name} can not attack himself`)
    return;
  }
}
Fighters.prototype.setHitpoints = function(val){
  return this.hitpoints = val
}
Fighters.prototype.getName = function(){
  return this.name;
}
Fighters.prototype.getHitpoints = function(){
  return this.hitpoints
}
Fighters.prototype.getTotalHitpoints = function(){
  return this.totalHitpoints;
}
Fighters.prototype.setTotalHitpoints  = function(val){
  return this.totalHitpoints  = val
}
Fighters.prototype.getAttack = function(){
  return this.attack;
}
Fighters.prototype.setAttack = function(val){
  return this.attack = val;
}
Fighters.prototype.isAlive = function(){
  if(this.hitpoints > 0){
   return true
  }else{
    return false
  };
}
                    //Champion

Champion.prototype = Object.create(Fighters.prototype);
Champion.prototype.constructor = Champion;
function Champion(){
  Fighters.apply(this, arguments);
  
  this._defence = false;
  
  this._unBlocked = function(){
    return this._defence = false;
  }
}
Champion.prototype.fight = function(fighter){
  Fighters.prototype.fight.apply(this, arguments);
  if(fighter.hitpoints <= 0){
    console.log(`${this.name} winner`)
    console.log(`${fighter.name} is dead`)
    this.attack += 1;
  }
}
Champion.prototype.heal = function(){
  if(this.isAlive()){
    if(this.hitpoints <= this.totalHitpoints - 5){
      this.hitpoints += 5;
    }else{
      console.log(`${this.name} Hitpoints is full`);
      return;
    }
  }else{
    console.log(`You can not use Heal, because you are dead`);
    return;
  }
  
}

Champion.prototype.defence = function(){
  this.totalHitpoints += 1;
  return this._defence = true;
}
                    //Monster

Monster.prototype = Object.create(Fighters.prototype);
Monster.prototype.constructor = Monster;

function Monster(){
  Fighters.apply(this, arguments);
  
  this.rage = null;
  
  this._rage = function(){
    if(this.rage){
      this.rage--;
    }
    if(this.rage === 0){
      this.attack = this.setAttack(this.attack / 2);
      this.rage = null;
    }
  }
}
Monster.prototype.fight = function(fighter){
  
  Fighters.prototype.fight.apply(this, arguments);
  
  this._rage();
  
  if(fighter.hitpoints <= 0){
    console.log(`${this.name} winner`)
    console.log(`${fighter.name} is dead`)
    
    this.hitpoints += Math.round(fighter.totalHitpoints * 0.25);
    this.totalHitpoints += Math.round(fighter.totalHitpoints * 0.1);
    if(this.hitpoints > this.totalHitpoints){
      this.setHitpoints(this.totalHitpoints)
    }
  }
}

Monster.prototype.enrage = function(){
  if(this.rage === null){
    this.attack *= 2;
  }
  return this.rage = 2;
}
Monster.prototype.fury = function(){
  if(this.hitpoints > 5){
    this.totalHitpoints -= 5;
    this.hitpoints -= 5;
    this.attack += 2;
    
     this._rage();
  }else{
    console.log(`You can't used fury`)
  }
}

//код проверки
var hunter = new Champion({name: `Rexxar`, attack: 10, hitpoints: 60});
var beast = new Monster({name: `King Krush`, attack: 8, hitpoints: 80});

//hunter.fight(beast);
//console.log(beast.getHitpoints()); // -> 70
//beast.enrage();
//hunter.fight(beast);
//console.log(beast.getHitpoints()); // -> 60
//beast.fight(hunter);
//console.log(hunter.getHitpoints()); // -> 44
//
//hunter.fight(beast);
//hunter.fight(beast);
//hunter.fight(beast);
//hunter.fight(beast);
//hunter.fight(beast);
//hunter.fight(beast);
//
//console.log(beast.isAlive()); // -> false
//console.log(hunter.getAttack())     // -> 11
//console.log(hunter.getHitpoints()); // -> 44
//hunter.heal();
//console.log(hunter.getHitpoints()); // -> 49