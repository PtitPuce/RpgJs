let array_armures = [
    {
        nom: "Tissu",
        defense: 0,
        agilite: 4,
    },
    {
        nom: "Cuir",
        defense: 2,
        agilite: 3,
    },
    {
        nom: "Maille",
        defense: 3,
        agilite: 1,
    },
    {
        nom: "Plate",
        defense: 5,
        agilite: -2,
    }
];

let Armure = class{
    nom;
    defense;
    agilite;

    constructor(_armure){
        this.nom = _armure.nom;
        this.defense = _armure.defense;
        this.agilite = _armure.agilite;
    }

    toString(){
        return this.nom + "(DEF:"+this.defense+", AGI:"+this.agilite+")";
    }
}