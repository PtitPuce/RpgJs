let array_armes = [
    {
        nom: "Mains nues",
        agilite: 5,
        nbDes: 1,
        bonusDegat: -2,
        penetrationArmure: 0
    },
    {
        nom: "Dagues",
        agilite: 4,
        nbDes: 2,
        bonusDegat: 0,
        penetrationArmure: 2
    },
    {
        nom: "Epee 1M",
        agilite: 3,
        nbDes: 1,
        bonusDegat: 3,
        penetrationArmure: 1
    },
    {
        nom: "Epee 2M",
        agilite: 3,
        nbDes : 2,
        bonusDegat : 4,
        penetrationArmure : 0
    },
    {
        nom : "Tronc d'arbre",
        agilite: -3,
        nbDes : 3,
        bonusDegat : 4,
        penetrationArmure : 3
    }
];

let Arme = class{
    nom;
    agilite;
    nbDes;
    bonusDegat;
    penetrationArmure;

    constructor(_arme){
        this.nom = _arme.nom;
        this.agilite = _arme.agilite;
        this.nbDes = _arme.nbDes;
        this.bonusDegat = _arme.bonusDegat;
        this.penetrationArmure = _arme.penetrationArmure;
    }

    getDegats(){
        var val_degats = this.bonusDegat;
        if(this.nbDes > 0){
            for (let i = 0; i < this.nbDes; i++) {
                val_degats += Math.ceil(Math.random()*6);
            }
        }
        return val_degats < 0 ? 0 : val_degats;
    }

    toString(){
        return this.nom + "(AGI:"+this.agilite+", Dés:"+this.nbDes+", DEG:"+this.bonusDegat+", PA:"+this.penetrationArmure+")";
    }
}