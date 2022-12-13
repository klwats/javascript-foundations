class Vampire {
    constructor(vampireName, petType, drink) {
        this.name = vampireName;
        this.pet = petType || "bat"
        this.thirsty = true;
        this.ouncesDrank = 0;
    }   
    drink() {
        this.thirsty = false
        this.ouncesDrank += 10
        if (this.ouncesDrank >= 50) {
            this.ouncesDrank = 50
            return 'I\'m too full to drink anymore!'
        }
    }
}

//each time vampire.drink is invoked, ouncesDrank increases by 10


module.exports = Vampire