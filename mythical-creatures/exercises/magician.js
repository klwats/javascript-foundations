class Magician {
    constructor(person) {
        this.name = `The Great ` + person.name
        this.assistant = person.assistant || false
        this.favoriteAccessory = person.clothing || 'top hat'    
        this.confidencePercentage = 10    
    }
    performIncantation(spellName) {
        return `${spellName}!`.toUpperCase()
    }
    performTrick() {
        this.confidencePercentage += 10
        if (this.favoriteAccessory === 'top hat') {
        return 'PULL RABBIT FROM TOP HAT'
     } else if (this.favoriteAccessory = 'cape') {
        return 'PULL DOVE FROM SLEEVE'
     }
}
    performShowStopper() {
        if (this.assistant === false || this.confidencePercentage < 100) {
            return 'Oh no, this trick is not ready!'
        } else {
            return 'WOW! The magician totally just sawed that person in half!'
        }
    }
}



module.exports = Magician



