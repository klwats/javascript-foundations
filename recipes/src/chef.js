var Recipe = require('../src/recipe.js');

class Chef {
    constructor(name, recipes) {
        this.name = name;
        this.recipeBox = recipes
    }

    tryRecipe(recipe, rating) {
        for (var i = 0; i < this.recipeBox.length; i++) {
            if (this.recipeBox[i].name === recipe) {
                this.recipeBox[i].rateRecipe(rating)
            }
        }
            }

    addRecipe(recipe, ingredients) {
        recipe = new Recipe( {name: recipe, ingredients: ingredients });
        this.recipeBox.push(recipe)

    }
    changeRecipe(recipe, ingredient, newAmount) {
        for (var i = 0; i < this.recipeBox.length; i++) {
            console.log(this.recipeBox[i].amount)
            if (this.recipeBox[i].name === recipe && this.recipeBox[i].ingredients === ingredient) {
                this.recipeBox[i].ingredient.amount.changeIngredientAmount(newAmount)
            }
        }
    }
        }
        

            
  
    


module.exports = Chef;
