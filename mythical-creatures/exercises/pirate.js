class Pirate {
    constructor(pirateName, pirateJob) {
        this.name = pirateName;
        this.job = pirateJob || 'scallywag';
        this.cursed = false
        this.booty = 0
        
    }
    robShip() {
        this.booty += 100
        if (this.booty >= 500) {
            this.booty = 500
            this.cursed = true    
        }
        if (this.cursed === true) {
            return 'ARG! I\'ve been cursed!'
        } else if (this.cursed === false) {
            return 'YAARRR!'
        }
    }
    liftCurse() {
        if (this.booty >= 300 && this.cursed === true) {
            this.booty = (this.booty - 300)
            this.cursed = false
            return 'Your curse has been lifted!'
        }
        else {
            return 'You don\'t need to lift a curse!'
        }

    }
    }



//after invoking robShip 5x, this.booty remains at 500 and this.cursed is true
//when this.curse is true, returns arg...




module.exports = Pirate