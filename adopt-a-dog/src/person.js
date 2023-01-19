var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
    //this.dog is an instance of dog and has access to Dog object
  }
fillFoodBowl() {
  //approach1 - ideal to not affect the class outside of a class
  this.dog.hungry = false
  //appraoch2 (more ideal)
  //this.dog.eat()
}
throwBall() {
  //this.dog.energyLevel --;
  this.dog.fetchBall()
  return `${this.dog.name} loves playing fetch!`
}
introduceNewFriends(dog) {
  //approach1
  this.dog.friends.push(dog.name)
  //approach2
  this.dog.makeNewFriend(dog)
  
}

adoptAPup(newDogName, newDogAge) {
  //this.dog should be an instance of Dog
  //this.dog should have a name of Rocky
  //this.dog should have an age of 2
  if (!this.dog) {
  this.dog = new Dog({ name: newDogName, age: newDogAge}) 
} else {
  return `You can\'t adopt ${newDogName}. You already have Cap!`
}
}
}

module.exports = Person;
