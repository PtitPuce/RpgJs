let array_archetypes = [
    {
        nom: "Hobbit", HP: 20, FORCE : 1, AGILITE: 6
    },
    {
        nom: "Voleur", HP: 24, FORCE : 2, AGILITE: 5
    },
    {
        nom: "Guerrier", HP: 28, FORCE : 3, AGILITE: 3
    },
    {
        nom: "Barbare", HP: 32, FORCE : 4, AGILITE: 1
    },
    
];


let Archetype = class{
    constructor(_game){
        this.GAME = _game;
        this.HP = objet.HP;
        this.FORCE = objet.FORCE;
        this.AGILITE = objet.AGILITE;

        this.ARMURE = null;
        this.ARME = null;
    }

    setArmure(_armure){ this.ARMURE = _armure; }
    setArme(_arme){ this.ARME = _arme; }

    getPointArmure(){
        return  this.ARMURE.defense;
    }
    getEsquive(){
        return this.AGILITE + this.ARME.agilite;
    }
    checkHit(_enemy){
        let chance = Math.random()*6 + Math.random()*6;  // (2D6 + this.ARME.agilite) > (enemy.AGILITE + enemy.getEsquive())
        let bonusThis = chance + this.ARME.agilite;
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
        this.GAME.Over();
    }
}