class Arena {
    name
    gladiators

    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = []
    }

    addGladiator (gladName) {
        if (this.gladiators.length < 2) {
            this.gladiators.push(gladName.name)
        } else {
            throw "Only 2 gladiators can be in the arena at the same time!"
        }
    }

    // Not finished!!!!!

    fight(glad1, glad2) {
        let weapon1 = glad1.weapon
        let weapon2 = glad2.weapon

        if (weapon1 === "Trident" && weapon2 === "Spear") {
            console.log("The winner is " + glad1.name + "!")
        } else if (weapon1 === "Spear" && weapon2 === "Club") {
            console.log("The winner is " + glad1.name + "!")
        } else if (weapon1 === "Club" && weapon2 === "Trident") {
            console.log("The winner is " + glad1.name + "!")
        } else if (weapon1 === weapon2) {
            console.log("Nobody win!")
        }
    }
}

export {Arena}