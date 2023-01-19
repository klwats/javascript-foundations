class Ingredient {
    constructor(obj) {
        this.name = obj.name;
        this.amount = obj.amount;

    }
    changeAmount(num) {
        this.amount = num
    }
  
}

module.exports = Ingredient;
