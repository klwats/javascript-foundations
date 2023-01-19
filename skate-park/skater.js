class Skater{
    constructor(skaterObj) {
        this.name = skaterObj.name;
        this.skill = skaterObj.skill;
        this.tricks = skaterObj.tricks;
        this.money = skaterObj.cash ;
        this.frustration = 0;

    }
    practice(trick) {
        if (!this['tricks'][trick]) {
            this.frustration ++;
        } if (this.frustration === 3) {
            this.frustration = 0;
            this['tricks'][trick] = true;
            return `I just learned to ${trick}!!!`
        }
    }
}




module.exports = Skater