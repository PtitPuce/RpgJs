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
    nom;
    HP;
    FORCE;
    AGILITE;

    constructor(_archetype){
        this.nom = _archetype.nom;
        this.HP = _archetype.HP;
        this.FORCE = _archetype.FORCE;
        this.AGILITE = _archetype.AGILITE;
    }

    toString(){
        return this.nom + "(HP:"+this.HP+", FOR:"+this.FORCE+", AGI:"+this.AGILITE+")";
    }
}