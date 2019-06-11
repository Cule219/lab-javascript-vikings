// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking  extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) {
        return `${this.name} has received ${damage} points of damage`}
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) {
        return `A Saxon has received ${damage} points of damage`}
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let rand = Math.floor(this.saxonArmy.length * Math.random())
        let rand1 = Math.floor(this.vikingArmy.length * Math.random())
        this.saxonArmy[rand].receiveDamage(this.vikingArmy[rand1].strength);
        if(this.saxonArmy[rand].health <= 0){ this.saxonArmy.splice(rand, 1);
            return 'A Saxon has died in combat';
        }
    }
    saxonAttack() {
        let rand = Math.floor(this.vikingArmy.length * Math.random())
        let rand1 = Math.floor(this.saxonArmy.length * Math.random())
        this.vikingArmy[rand].receiveDamage(this.saxonArmy[rand1].strength);
        let c = this.vikingArmy[rand] + " has received " + this.saxonArmy[rand1].strength + " points of damage";
        if(this.vikingArmy[rand].health <= 0){  
            this.vikingArmy.splice(rand, 1);
            return c;
        }
        return this.vikingArmy[rand].name + " has received " + this.saxonArmy[rand1].strength + " points of damage";
    }
    showStatus() {
        if (this.saxonArmy.length  === 0) {
            return `Vikings have won the war of the century!`
        }
        else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`
        }   
        else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
