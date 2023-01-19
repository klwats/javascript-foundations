class Golfer {
    constructor(obj) {
        this.name = obj.name,
        this.handicap = obj.handicap,
        this.frustration = 0,
        this.confidence = 0

    }

    calculateAvg(par) {
        this.handicap = this.handicap + par
        return `I usually shoot a ${this.handicap} on average.`
    }

    playRound(golfCourse) {
        if (golfCourse.difficulty === 'hard') {
            this.frustration = this.frustration + 500
        } else {
            this.frustration = this.frustration + 100
        }
    }

    hitTheRange() {
        this.confidence += 10
        }

    marvel(golfCourse) {
        var features = []
        for (var i = 0; i < golfCourse.features.length; i++) {
            features.push(golfCourse.features[i])
    }
    return `I love the ${features[0]} and ${features[1]} on this course!`
    }

    whatYaShoot(num) {
        if (num > 0) {
            this.frustration += 20
            return 'Doh!'
        } else if (num === 0) {
            this.frustration -= 10
            return 'Booyah!'
        } else {
            this.frustration = 0
            return 'I AM THE GREATEST GOLFER ALIVE!'
        }

    }
}



module.exports = Golfer;
