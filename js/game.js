let Game= class{
    perso_joueur;
    perso_enemy;
    turn_count;
    list_archetypes;
    list_armes;
    list_armures;


    constructor(list_archetypes, list_armes, list_armures){
        this.list_archetypes = list_archetypes;
        this.list_armes = list_armes;
        this.list_armures = list_armures;

        return this;
    }

    init(){
        this.perso_joueur = new Personnage();
        this.perso_enemy = this.createEnemy();

        return this;
    }

    startFight(){
        this.turn_count = 0;
    }
    nextHit(){
        // joueur
        var degat = 0;
        if(this.perso_joueur.checkHit(this.perso_enemy)){
            degat = parseInt(this.perso_joueur.getDegats(this.perso_enemy));
            this.perso_enemy.takeDegats(degat);
        }
        console.log("JOUEUR fait "+degat+" à son enemi");

        // enemy
        degat = 0
        if(this.perso_enemy.checkHit(this.perso_joueur)){
            degat = parseInt(this.perso_enemy.getDegats(this.perso_joueur));
            this.perso_joueur.takeDegats(degat);
        }
        console.log("ENEMI fait "+degat+" au joueur");


        console.log("toujours en vie ? "+this.perso_joueur.idDead);
        if(this.perso_joueur.isDead){
            this.gameOver();
        }
        else{
            if(this.perso_enemy.isDead){
                this.nextEnemy();
            }
        }

        this.turn_count++;
    }

    nextEnemy(){
        this.perso_enemy = this.createEnemy();
        this.startFight();
    }

    createEnemy(){
        var _enemy = new Personnage();
        _enemy.setArchetype( this.list_archetypes[ Math.floor(Math.random()*this.list_archetypes.length) ] );
        _enemy.setArme( this.list_armes[ Math.floor(Math.random()*this.list_armes.length) ] );
        _enemy.setArmure( this.list_armures[ Math.floor(Math.random()*this.list_armures.length) ] );

        return _enemy;
    }

    gameOver(){
        console.log("GAME OVER");
    }
}