var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }

    gazeAtVictim(person) {
        var statue1 = new Statue(person.name)
        if (this.statues.length < 3) {
        this.statues.push(statue1)
        } else if (this.statues.length === 3) {
            var releasedVictim = new Person(this.statues[0].name)
            this.statues.shift()
            this.statues.push(statue1)
            releasedVictim.mood = 'relieved'
            return releasedVictim
        }
      
}
}




var medusa1 = new Medusa('Kelli')
var medusa2 = new Medusa('Lucy')


module.exports = Medusa


//the statue that is shifted out of array should become person with name


class Medusa {
    constructor(name) {
        this.name = name
        this.statues = 0
    }


gazeAtVictim(person) {
    var statue1 = new Statue(person.name)
    if (this.statues.length < 3) {
    this.statues.push(statue1)
    } else if (this.statues.length === 3) {
        var releasedVictim = new Person(this.statues[0].name)
        this.statues.shift()
        this.statues.push(statue1)
        releasedVictim.mood = 'relieved'
        return releasedVictim

    }
}
}