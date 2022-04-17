// Soldier
class Soldier {
  constructor (health, strength){
   this.health = health;
   this.strength = strength; 
  }
  attack (){
    return this.strength;
  }

  //should remove the received damage from the health property
  receiveDamage (damage){
    let receivedDamage = 0;
    this.health = this.health - damage;
return;
  }

}

// Viking
class Viking extends Soldier{
  constructor (name, health, strength){
  super ( health, strength);
  this.name = name;
}
  attack (){
    return this.strength;
  }
  //should remove the received damage from health property
  //should return "NAME has received DAMAGE points of damage"; if the Viking is still alive.
  receiveDamage (damage){
    // super.receiveDamage(damage);
    this.health = this.health - damage;
    if (!this.health){
      return `${this.name} has died in act of combat`;
    
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  } 
  battleCry (){
   
    return "Odin Owns You All!";
    }
  }
// Saxon
    class Saxon extends Soldier{
     /* constructor(health, strength){
      super (health, strength);
        this.health = health;
        this.strength = strength; 
       }*/
      attack (){
        return this.strength;
      }

     //this method needs to be reimplemented
    receiveDamage (damage){
      this.health = this.health - damage;
    if (!this.health){
      return `A Saxon has died in combat`;
    
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }   
}}


// War
   class War {
  constructor (){
  this.vikingArmy= [];
  this.saxonArmy= [];
}
addViking(vikingObject){
 /* this.vikingArmy = [{"name": "Harald", "health": 300, "strength": 150}];
vikingObject = this.vikingArmy;
 return ;*/
 this.vikingArmy.push(viking);
}
addSaxon(saxonObject){
  /*this.saxonArmy = [{"health": 50, "strength": 20}];
  saxonObject = this.saxonArmy;
  return;*/
  this.saxonArmy.push(saxon);
  }
 vikingAttack(){
  const vikingsArmiesAttackNum=Math.random()*this.vikingArmy.length;
  const vikingsArmiesAttackIndex=Math.floor(vikingsArmiesAttackNum);
  const randomViking= this.vikingArmy[vikingsArmiesAttackIndex];
 
  const saxonArmiesAttackNum=Math.random()*this.saxonArmy.length;
  const saxonArmiesAttackIndex=Math.floor(saxonArmiesAttackNum);
  const randomSaxon= this.vikingArmy[saxonArmiesAttackIndex];

  const result = randomSaxon. receiveDamage(randomViking.attack());

  if (randomSaxon <= 0){
    this.saxonArmy.splice(saxonArmiesAttackIndex,1);
  }
 return result;
  }
 saxonAttack(){
   const vikingsArmiesAttackNum=Math.random()*this.vikingArmy.length;
   const vikingsArmiesAttackIndex=Math.floor(vikingsArmiesAttackNum);
   const randomViking= this.vikingArmy[vikingsArmiesAttackIndex];
  
   const saxonArmiesAttackNum=Math.random()*this.saxonArmy.length;
   const saxonArmiesAttackIndex=Math.floor(saxonArmiesAttackNum);
   const randomSaxon= this.vikingArmy[saxonArmiesAttackIndex];

   const result = randomViking. receiveDamage(randomSaxon.attack());
   if (randomViking <= 0){
    this.viikingArmy.splice(vikingArmiesAttackIndex,1);
  }
 return result;

  }
 
 showStatus(){
   if(!this.saxonArmy.length<=0){
    return `Vikings have won the war of the century!`;
    }
   else if(!this.vikingArmy.length<=0){
      return `Saxon have won the war of the century!`;
      }
      else {
        return `Saxons and Vikings are still in the thick of battle.`;
        }
}

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
