class VendingMachine {
    constructor(obj) {
        this.id = obj.id;
        this.isBroken = obj.isBroken;
        this.snacks = []

    }

    addSnacks(item) {
        this.snacks.push(item)
    }

}

module.exports = VendingMachine;
