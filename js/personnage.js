let Personnage = class{
    ARCHETYPE;
    HP;
    FORCE;
    AGILITE;
    ARME;
    ARMURE;
    isDead;
    
    constructor(){
        this.HP = 0;
        this.FORCE = 0;
        this.AGILITE = 0;

        this.ARCHETYPE = null;
        this.ARMURE = null;
        this.ARME = null;

        this.isDead = false;
    }

    setArchetype(_archetype){
        this.ARCHETYPE = _archetype;

        this.HP = parseInt(this.ARCHETYPE.HP);
        this.FORCE = parseInt(this.ARCHETYPE.FORCE);
        this.AGILITE = parseInt(this.ARCHETYPE.AGILITE);

    }
    setArmure(_armure){ this.ARMURE = _armure; }
    setArme(_arme){ this.ARME = _arme; }

    getPointArmure(){
        return  parseInt(this.ARMURE.defense);
    }
    getAgiliteTotal(){
        return parseInt(this.AGILITE) + parseInt(this.ARME.agilite) + parseInt(this.ARMURE.agilite);
    }
    
    checkHit(_enemy){
        let chance = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6);  // (2D6 + this.ARME.agilite) > (enemy.AGILITE + enemy.getAgiliteTotal())
        let bonusThis = chance + this.getAgiliteTotal();
        let bonusEnemy = _enemy.getAgiliteTotal();
        
        console.log("chance: "+chance+" / bonusThis: "+bonusThis+" / esquiveEnemi: "+bonusEnemy);
        console.log("hit ?"+ (bonusThis > bonusEnemy));

        if(bonusThis > bonusEnemy){
            return true;
        }
        return false;
    }
    getDegats(_enemy){
        var _degats = this.ARME.getDegats() + this.FORCE - _enemy.getPointArmure() + this.ARME.penetrationArmure;

        return _degats < 0 ? 0 : _degats;
    }
    takeDegats(_degats){
        this.HP = parseInt(this.HP) - parseInt(_degats);
        if(this.HP <= 0){
            this.die();
        }
    }
    die(){
        this.isDead = true;
    }

    // toStrings
    getDegatsToString(){
        return this.ARME.nbDes + "D6 +"+ this.ARME.bonusDegat + " +(F="+this.FORCE+") (PA="+this.ARME.penetrationArmure+")";
    }
    getDegatsMinToString(){
        return ((this.ARME.nbDes) + this.ARME.bonusDegat + this.FORCE) + "(PA="+this.ARME.penetrationArmure+")";

    }
    getDegatsMaxToString(){
        return ((this.ARME.nbDes*6) + this.ARME.bonusDegat + this.FORCE) + "(PA="+this.ARME.penetrationArmure+")";
    }
}