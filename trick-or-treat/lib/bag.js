var Candy = require('../lib/candy.js');

class Bag{
    constructor() {
        this.empty = true;
        this.count = 0;
        this.candies = [];

    }
    fill(candy) {
        this.candies.push(candy)
        this.count ++
    }

    contains(candyType) {
        for (var i = 0; i < this.candies.length; i++) {
            if (this.candies[i].type === candyType) {
                return true
            } else {
                return false
            }
        }
    }
}
    
//check if it contains certain type of candy
//contains is a method with one parameter
//type of candy passed in as argument
//if type of candy passed in as candy argument is the same as candy passed in as contains argument return true





module.exports = Bag