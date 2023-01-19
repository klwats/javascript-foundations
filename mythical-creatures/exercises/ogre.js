var assert = require('chai').assert;
var Human = require('../exercises/ogre');

class Ogre {
    constructor(object) {
        this.name = object.name
        this.home = object.abode || 'Swamp'
        this.swings = 0
        this.knockedOut = false

    }
    encounter(human) {
        human.encounterCounter ++
        if (this.encounterCounter % 3 === 0) {
            this.swings ++
            
        }
        
    }
    swingAt() {
        this.swings ++
    }
}



module.exports = Ogre