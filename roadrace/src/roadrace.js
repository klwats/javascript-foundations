class Roadrace {
    constructor(obj) {
        this.name = obj.title;
        this.location = obj.city;
        this.distance = 0;
        this.participants = [];
    }

    setDistance(miles) {
        this.distance = this.distance + miles;
        return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`

    }

    registerParticipants(participant) {
        this.participants.push(participant)
        console.log(this.participants)
    }

    completeRace() {
        for (var i = 0; i < this.participants.length; i++) {
            this.participants[i].runRace(this.name, this.distance)
        
        
    }
    }
}

module.exports = Roadrace;
