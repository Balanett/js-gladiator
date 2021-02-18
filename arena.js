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

    removeGladiator (glads, gladName) {
        return glads.filter(glads => glads !== gladName)
    }

    checkEntertainment (glads) {
        if (glads.includes("Maximus")) {
            console.log("CHECK Entertainment --> The audience is having fun, because Maxiumus is in the arena.")
        } else {
            console.log("CHECK Entertainment --> The audience demands Maxiumus!")
        }
    }

    fight(glad1, glad2) {
        let weapon1 = glad1.weapon
        let weapon2 = glad2.weapon
        let winner = ""
        let loser = ""

        if (glad1.name === "Maximus") {
            winner = glad1.name
            loser = glad2.name }

        else if (glad2.name === "Maximus") {
            winner = glad2.name
            loser = glad1.name }

        else if (weapon1 === weapon2) {
            winner = "Nobody won"}

        else if (
            (weapon1 === "Trident" && weapon2 === "Spear") ||
            (weapon1 === "Spear" && weapon2 === "Club") ||
            (weapon1 === "Club" && weapon2 === "Trident")) {
            winner = glad1.name
            loser = glad2.name }

        else if (
            (weapon2 === "Trident" && weapon1 === "Spear") ||
            (weapon2 === "Spear" && weapon1 === "Club") ||
            (weapon2 === "Club" && weapon1 === "Trident")) {
            winner = glad2.name
            loser = glad1.name }

        return [winner, loser]
    }
}

export {Arena}