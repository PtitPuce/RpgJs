
let Personnage = class{
    ARCHETYPE;
    HP;
    FORCE;
    AGILITE;
    
    constructor(){
        this.ARCHETYPE = null;

        this.HP = 0;
        this.FORCE = 0;
        this.AGILITE = 0;

        this.ARMURE = null;
        this.ARME = null;
    }

    setArmure(_armure){ this.ARMURE = _armure; }
    setArme(_arme){ this.ARME = _arme; }
    setArchetype(_archetype){
         this.ARCHETYPE = _archetype;
         this.HP = _archetype.HP;
         this.AGILITE = _archetype.AGILITE;
         this.FORCE = _archetype.FORCE; 
    }

    
    getPointArmure(){
        return  this.ARMURE.defense;
    }
    getEsquive(){
        return this.AGILITE + this.ARME.agilite + this.ARMURE.agilite;
    }
    checkHit(_enemy){
        let chance = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6);  // (2D6 + this.ARME.agilite) > (enemy.AGILITE + enemy.getEsquive())
        let bonusThis = chance + this.ARME.agilite + this.AGILITE;
        let bonusEnemy = _enemy.getEsquive();

        if(bonusThis > bonusEnemy){
            return true;
        }
        return false;
    }
    getDegats(_enemy){
        this.ARME.getDegats() + this.FORCE - _enemy.getPointArmure() + this.ARME.penetration;
    }
    takeDegats(_degats){
        this.HP -= _degats;
        if(this.HP < 0){
            this.die();
        }
    }
    die(){
    }
}