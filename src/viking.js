// Soldier
class Soldier {
  constructor (health, strength){
   this.health = 300;
   this.strength = 150; 
  }
  attack (){
    return this.strength;
  }

  //should remove the received damage from the health property
  receiveDamage (damage){
    let receivedDamage = 50;
    this.health = this.health - receivedDamage;
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
    let receivedDamage = 50;
    this.health = this.health - receivedDamage;
    if (this.health <=receivedDamage){
    return `${this.name} has received ${damage} points of damage`;
    } else {
    return `${this.name} has died in act of combat`;
    }
  } 
  battleCry (){
   
    return "Odin Owns You All!";
    }
  }
// Saxon
    class Saxon extends Soldier{
      constructor(health, strength){
      super (health, strength);
        this.health = 60;
        this.strength = 25; 
       }
      attack (){
        return this.strength;
      }

     //this method needs to be reimplemented
    receiveDamage (damage){
      let receivedDamage = 50;
      this.health = this.health - receivedDamage;
      if (this.health <=receivedDamage){
        return `Saxon has received ${this.health} points of damage`;
        } else {
        return `${this.name} has died in act of combat`;
        
}}
}

// War
class War {
  constructor (){
  this.vikingArmy= [];
  this.saxonArmy= [];
}
addViking(vikingObject){
  this.vikingArmy = [{"name": "Harald", "health": 300, "strength": 150}];
vikingObject = this.vikingArmy;
 return ;
}
addSaxon(saxonObject){
  this.saxonArmy = [{"health": 50, "strength": 20}];
  saxonObject = this.saxonArmy;
  return;
  }
 vikingAttack(){
   
  const vikingsArmiesAttack= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  const saxonArmiesAttack= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  
  return vikingsArmiesAttack.receiveDamage = saxonArmiesAttack.strength;
 
  }
 saxonAttack(){
  const vikingsArmiesAttack= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  const saxonArmiesAttack= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  
  return saxonArmiesAttack.receiveDamage = vikingsArmiesAttack.strength;
  }
 
 showStatus(){
   /*if(this.saxonArmy= []){
    return `Vikings have won the war of the century!`;*/
    }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
