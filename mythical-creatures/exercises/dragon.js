class Dragon {
    constructor(nameDragon, nameRider) {
      this.name = nameDragon
      this.rider = nameRider
      this.hungry = true
      this.timesEaten = 0
    }  
   greet(rider) {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.timesEaten++;
    if (this.timesEaten <= 2) {
      this.hungry = true 
    } else {
  this.hungry = false
}
  }
}

module.exports = Dragon;