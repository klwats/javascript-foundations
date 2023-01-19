var Skier = require('./Skier');



class Lift {
    constructor(limit) {
        this.inService = true;
        this.limit = limit;
        this.skiers = [];
        this.safetyBar = 'up';

    }

    admitSkier(skier, hasLiftTicket) {
        var skier1 = new Skier(skier)
        if (this.limit > this.skiers.length && hasLiftTicket === true) {
        this.skiers.push(skier1)
        } else if (this.limit <= this.skiers.length) {
            return `Sorry, ${skier}. Please wait for the next lift!`
        } else if (hasLiftTicket === false) {
            return `Sorry, ${skier}. You need a lift ticket!`
        }
    }

        startLift() {
            if (this.limit === this.skiers.length) {
                this.safetyBar = 'down'
            } else if (this.limit - this.skiers.length === 1) {
                this.safetyBar = 'up';
                return 'We still need 1 more skier!'
            } else {
                return 'We still need 2 more skiers!'
            }
        }
    }

      
    
  


module.exports = Lift;
