class Dog{
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.hungry = true;
    this.energyLevel = 5;
    this.friends = [];

  }

  eat() {
    if (this.hungry === true) {
    this.hungry = false;
    return 'Yum!'
    } else {
      return 'I refuse to eat.'
    }

    }
    fetchBall() {
      if (this.energyLevel > 3) {
        this.energyLevel --
      return 'This is fun!'
    } else {
      return 'Nah, I\'m going to sleep instead.'
    }
  }

  sleep() {
    if (this.energyLevel < 10) {
    this.energyLevel ++
  } else {
    return 'I have too much energy to rest. I\'m going to chew something instead.'
  }
}
}




module.exports = Dog