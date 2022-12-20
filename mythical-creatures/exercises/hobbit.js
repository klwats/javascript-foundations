// class Hobbit {
//     constructor(hobbit) {
//         this.name = hobbit.name
//         this.age = 0
//         this.adult = true
//         this.old = false
//         this.hasRing = true

//     }
//     celebrateBirthday() {
//         this.age ++
//         if (this.age <= 32) {
//             this.adult = false
//         } else if (this.age >= 101) {
//             this.old = true
//         } else {
//             this.adult = true
//         }
//     }

//     getRing() {
//         if (this.name === 'Frodo') {
//             this.hasRing = true
//             return 'Here is the ring!'
//         } else {
//             this.hasRing = false
//             return 'You can\'t have it!'
//         }
//     }
// }





// module.exports = Hobbit


class Hobbit {
    constructor(person) {
        this.name = person.name
        this.age = 0
        this.adult = false
        this.old = false
        this.hasRing = false

    }
    celebrateBirthday() {
        this.age += 1
        if (this.age <= 32) {
            this.adult = false
        } else {
            this.adult = true
        } 
        if (this.age > 100) {
            this.old = true
        } else {
            this.old = false
        }
        }
    getRing() {
        if (this.name === 'Frodo') {
            this.hasRing = true
            return 'Here is the ring!'
        } else {
            this.hasRing = false
            return 'You can\'t have it!'
        }
    }
}




module.exports = Hobbit