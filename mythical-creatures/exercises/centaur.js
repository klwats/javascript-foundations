class Centaur {
    constructor(object) {
        this.name = object.name;
        this.breed = object.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.taskCount = 0;

    }
    shootBow() {
        this.taskCount ++;
        if (this.taskCount >= 3) { 
            this.cranky = true
            return 'NO!'
        } else if (this.layingDown === true) {
            return 'NO!'
        } else if (this.standing === true) {
            return 'Twang!!!'
    }
}
    run() {
        this.taskCount++
        if (this.taskCount >= 3) {
            this.cranky = true
            return 'NO!'
        } else if (this.layingDown === true) {
            return 'NO!'
        } else {
        return 'Clop clop clop clop!!!'
    }
}
    sleep() {
        if (this.standing === true) {
            return 'NO!'
        } else if (this.layingDown === true) {   
            this.cranky = false
            this.taskCount = 0
        }
    }

    layDown() {
        if (this.layingDown = true) {
            this.standing = false
        }
        }

    standUp() {
        if (this.standing = true) {
            this.layingDown = false
        }
    }

    sleep() {
        if (this.layingDown === true) {
            this.cranky = false
            return 'ZZZZ'
        } else {
            return 'NO!'
        }
    }
    drinkPotion() {
        if (this.standing === true) {
        this.cranky = false
        } else {
            return 'Not while I\'m laying down!'
        }
    }
    }


var centaur1 = new Centaur({name: "Kelli"})
var centaur2 = new Centaur({name: 'Lucy'} )


module.exports = Centaur