class Skatepark{
    constructor(parkObj) {
        this.name = parkObj.name;
        this.yearFounded = parkObj.year;
        this.style = parkObj.type;
        this.features = parkObj.features;
        this.isPrivate = parkObj.isPrivate || false;
        this.cost = parkObj.price || 0;
        this.occupants = []
    }

    admit(skater) {
        if (this.cost === 0) {
            this.occupants.push(skater)
            return 'Welcome to the free Major Taylor Skatepark!'
        } else if (skater.money < this.cost) {
            return `Sorry, you don't have enough money.`
        } else if (this.occupants.length >= 3) {
            return 'Sorry, we are at max capacity. Thank you for understanding.'
        } else {
            this.occupants.push(skater)
            skater.money = skater.money - this.cost
            return 'Welcome to Curbside, the cost will be $12.00.'
        }
    }
}



module.exports = Skatepark