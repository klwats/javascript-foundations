// class Dragon {
//     constructor(nameDragon, nameRider) {
//       this.name = nameDragon
//       this.rider = nameRider
//       this.hungry = true
//       this.timesEaten = 0
//     }  
//    greet(rider) {
//     return `Hi, ${this.rider}!`
//   }
//   eat() {
//     this.timesEaten++;
//     if (this.timesEaten <= 2) {
//       this.hungry = true 
//     } else {
//   this.hungry = false
// }
//   }
// }

// module.exports = Dragon;


class Dragon {
  constructor(dragonName, riderName) {
    this.name = dragonName
    this.rider = riderName
    this.hungry = true
    this.timesEaten = 0

  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.timesEaten += 1
    if (this.timesEaten < 3) {
      this.hungry = true
    } else {
      this.hungry = false
    }
  }
}




module.exports = Dragon