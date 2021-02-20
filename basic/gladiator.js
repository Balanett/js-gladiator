class Gladiator {
    name
    weapon

    constructor(name, weapon) {
        if (weapon === "Trident" || weapon === "Club" || weapon === "Spear") {
            this.name = name
            this.weapon = weapon
        } else {
            throw Error("This is not a valid weapon!")
        }
    }
}

export default Gladiator