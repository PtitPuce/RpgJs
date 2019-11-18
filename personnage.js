
let Personnage = class{
    ARCHETYPE;
    HP;
    FORCE;
    AGILITE;
    
    constructor(_archetype){
        this.ARCHETYPE = _archetype;

        this.HP = this.ARCHETYPE.HP;
        this.FORCE = this.ARCHETYPE.FORCE;
        this.AGILITE = this.ARCHETYPE.AGILITE;

        this.ARMURE = null;
        this.ARME = null;
    }

    setArmure(_armure){ this.ARMURE = _armure; }
    setArme(_arme){ this.ARME = _arme; }

    getPointArmure(){
        return  this.ARMURE.defense;
    }
    getEsquive(){
        return this.AGILITE + this.ARME.agilite + this.ARMURE.agilite;
    }
    checkHit(_enemy){
        let chance = Math.random()*6 + Math.random()*6;  // (2D6 + this.ARME.agilite) > (enemy.AGILITE + enemy.getEsquive())
        let bonusThis = chance + this.ARME.agilite + this.AGILITE;
        let bonusEnemy = _enemy.AGILITE + _enemy.getEsquive();

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