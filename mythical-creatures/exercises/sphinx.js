class Sphinx {
    constructor() {
        this.name = null
        this.riddles = []
        this.heroesEaten = 0
        this.correctAnswerCounter = 0
    }
    collectRiddle(riddle) {
        this.riddles.push(riddle);
        if (this.riddles.length > 3) {
            this.riddles.shift()
        }
    }
    attemptAnswer(guess) {
        var answerMessage;
        var incorrectAnswerCounter = 0;
        for (var i = 0; i < this.riddles.length; i++) {
            if (this.riddles[i].answer === guess) {
                answerMessage = 'That wasn\'t that hard, I bet you don\'t get the next one'
                this.correctAnswerCounter++
            } else {
                incorrectAnswerCounter++
            }
        }

        if (incorrectAnswerCounter === this.riddles.length) {
            this.heroesEaten++
            return
        } 

        if (this.correctAnswerCounter === this.riddles.length) {
            answerMessage = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}???`
        }

        return answerMessage

        
    }
}


module.exports = Sphinx