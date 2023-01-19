var Ingredient = require('../src/ingredient.js');

class Recipe {
    constructor(obj) {
        this.name = obj.name;
        this.ingredients = obj.ingredients;
        this.attempted = false;
        this.rating = null

    }

    rateRecipe(rating) {
        this.attempted = true;
        this.rating = rating
    }

    changeIngredientAmount(ingredient, newAmount) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === ingredient) {
                this.ingredients[i].changeAmount(newAmount)
            }
        }
        }
    

    generateGroceryList() {
        var list = `You need:`
        for (var i = 0; i < this.ingredients.length; i++) {
            list += ` ${this.ingredients[i].amount} ${this.ingredients[i].name},`    
        }
        return list
    }
         
    }


module.exports = Recipe;
