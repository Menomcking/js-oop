class Allat {
    #labszama;
    #nev;

    constructor(nev, labakszama){
        this.#nev = nev;
        this.#labszama = labakszama;
    }
    hangotAd(){
        throw new Error('A hangotAd függvény absztrakt.');
    }
}
class Aranyhal extends Allat {
    constructor(nev){
        super(nev, 0);
    }
    hangotAd(){

    }
}
class Kutya extends Allat{
    constructor(nev){
        super(nev, 4);
    }
    hangotAd(){
        console.log("Vau");
    }
}
let kutya = new Kutya('Bodri');
let hall = new Aranyhal('Nemo');

