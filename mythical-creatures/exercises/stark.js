const Direwolf = require("../exercises/direwolf")

class Stark{
    constructor(object) {
        this.name = object.name;
        this.location = object.area || 'Winterfell';
        this.safe = false

    }
sayHouseWords() {
        if (this.safe === false) {
            return 'Winter is Coming'
        } else {
            return 'The North Remembers'
        } 
}
callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home)
    direwolf.home = this.location
    direwolf.protect(this)
    return direwolf
}
}





module.exports = Stark