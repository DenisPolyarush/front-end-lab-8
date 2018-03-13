/**
 * @typedef {Object} CombatHistory
 * @property {wins} number - Number of victories
 * @property {loses} number - Number of defeats
 */

/**
 * @typedef {Object} Stats
 * @property {string} name - The name of fighter
 * @property {number} attack - The amount of attack of fighter
 * @property {number} hp - The total number of health point of fighter
 */

/**
 * @typedef {Object} Fighter
 * @property {function} getName - Return name of the fighter
 * @property {function} fight - Return true if fighter make dmg to enemy, otherwise false
 * @property {function} block - Return true if enemy can block incoming damage, otherwise false (randomly)
 * @property {function} getStats - Retrurn {Stats} of fighter
 * @property {number} getCombatHistory - Return {CombatHistory} of previous fights
 */

/**
 * Pretty print fighter's info
 * @param {Fighter} fighter - The fighter
 * DO NOT MODIFY
 */
function showResult(fighter) {
	console.log('Fighter', fighter.getName());
    console.log('- Combat stats:', fighter.getCombatHistory());
    console.log('- Properties:', fighter.getStats());
}

function fighter(attacker) {
    let combatHistory = {
        wins : 0,
        loses: 0
    };
    let stats = {
        name : attacker.name,
        attack : attacker.attack,
        hp : attacker.hp
    };
    return {
        getName : function(){
           return stats.name;    
        },
        fight : function(defender){
            if(defender.block()){
                console.log(false);
            }else{
                let defenderHp = defender.getStats().hp;
                let defenderHistory = defender.getCombatHistory().loses;
                if(stats.attack >= defenderHp){
                    defenderHp = 0;
                    combatHistory.wins++;
                    defenderHistory++;
                }else{
                    defenderHp -= stats.attack;
                }
                
                defender.setStatsHp(defenderHp);
                defender.setHistory(defenderHistory);
                
                console.log(true);
            }
        },
        block : function(){
            return Math.random() > 0.5;
        },
        setStatsHp : function(val){
            return stats.hp = val;
        },
        setHistory : function(val){
            combatHistory.loses = val
        },
        getStats : function(){
            return {
                name : stats.name,
                attack : stats.attack,
                hp : stats.hp
            }
        },
        getCombatHistory : function(){
            return {
                wins : combatHistory.wins,
                loses : combatHistory.loses
			}
		}        
	}
}
/**
 * The following code must be valid after implementation!
 */ 
var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3
 /**
  * Fighter John
  * - Combat stats: { wins: 1, loses: 0 }
  * - Properties: { name: 'John', attack: 100, hp: 100 }
  */
showResult(fighter1);
 /** Fighter Kayn
  * - Combat stats: { wins: 0, loses: 0 }
  * - Properties: { name: 'Kayn', attack: 50, hp: 200 }
  */
showResult(fighter2); 
 /**
  * Fighter Bill
  * - Combat stats: { wins: 0, loses: 1 }
  * - Properties: { name: 'Bill', attack: 40, hp: 0 }
  */
showResult(fighter3);