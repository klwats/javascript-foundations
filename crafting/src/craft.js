var Material = require("../src/material.js")

class Craft {
    constructor(object) {
        this.name = object.type
        this.materials = object.materials
        this.completed = false
    }
    completeCraft() {
        this.completed = true
        return 'All done! It looks great!'
    }
    calculateProjectTotal() {
        var totalCost = []
        var total = 0
        for (var i = 0; i < this.materials.length; i++) {
            totalCost.push(this.materials[i].calculateMaterialCost())
             total = total + totalCost[i]     
        }
        return total
    }

}

module.exports = Craft;
