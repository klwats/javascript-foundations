var Bag = require('../lib/bag');
var Costume = require('../lib/costume');
var Candy = require('../lib/candy');

class TrickOrTreater{
    constructor(costume, bag) {
        this.bag = bag;
        this.dressedUpAs = costume.style;
        this.hasCandy = false;
        this.countCandies = 0
    }
    
    putCandyInBag(candy) {
        this.hasCandy = true;
        this.bag.candies.push(candy);
        this.countCandies ++;
        this.bag.count ++
    } 

    eat() {
        this.countCandies --;
        this.bag.candies.length --
    }
}







module.exports = TrickOrTreater