class Pirate {
    constructor(pirateName, pirateJob) {
        this.name = pirateName;
        this.job = pirateJob || 'scallywag';
        this.cursed = false
        this.booty = 0
    }
    robShip() {
        return 'YAARRR!'
        this.booty + 100
    }
}







module.exports = Pirate