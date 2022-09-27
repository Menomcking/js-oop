let smthng = {
    nev: "Username",
    eletkor: 23,    
}
class User {
    constructor(nev, eletkor){
    this.nev = nev;
    this.eletkor = nev;
    }
    get eletkor(){
        return this._eletkor;
    }
    set eletkor(eletkor){
        if(typeof eletkor === 'number' && eletkor >= 0){
            this._eletkor = eletkor;
        }else{
            throw new Error("Eletkor nemnegativ egesz kell, hogy legyen.");
        }
    }
    kiir(){
        console.log(user.nev, user,eketkor);
    }
    login(usernev, pass){
        return false;

    }
}

let user = new User ("User2", 19);

console.log(smthng instanceof User);
console.log(user instanceof User);
console.log(User);

user
.eletkor = "kutya";
user.kiir();
let k = user.kiir;
k();