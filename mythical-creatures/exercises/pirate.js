class Pirate {
    constructor(pirateName, pirateJob) {
        this.name = pirateName;
        this.job = pirateJob || 'scallywag';
        this.cursed = false
        this.booty = 0
        this.cursed = true
    }
    robShip() {
        this.booty += 100
        if (this.booty >= 500) {
            this.booty = 500
            this.cursed = true    
        }
        if (this.cursed = true) {
            console.log(this.cursed)
            return 'ARG! I\'ve been cursed!'
        } else if (this.cursed = false) {
            return 'YAARRR!'
        }
    
    }
}


//after invoking robShip 5x, this.booty remains at 500 and this.cursed is true
//when this.curse is true, returns arg...




module.exports = Pirate