class Arena {
    name
    gladiators

    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1) // -- Getter, Setter szerint átírni (tipp: privát)
        this.gladiators = []
    }

    addGladiator (gladName) {
        if (this.gladiators.length < 2) {       // -- a "szabályszerű" számokat érdemes elmenteni static const változóként
            this.gladiators.push(gladName)
        } else {
            throw Error("Only 2 gladiators can be in the arena at the same time!")
        }
    }

   /* logDetails () {
        console.log("ADD Gladiators --> "+arena.name+"'s gladiators: "+arena.gladiators[0].name+" "+arena.gladiators[1].name)
    }

    */

    removeGladiator (glads, gladName) {                    // ne kívülről jöjjön a glads tömb!
        return glads.filter(glads => glads !== gladName)
    }

    checkEntertainment (glads) {                           // ne kívülről jöjjön a glads tömb!   és mivel a tömb nem csak a nevet tartalmazza, meg kell keresni benne a nevet is
        if (glads.includes("Maximus")) {
            console.log("CHECK Entertainment --> The audience is having fun, because Maxiumus is in the arena.")
        } else {
            console.log("CHECK Entertainment --> The audience demands Maxiumus!")
        }
    }

    fight(glad1, glad2) {                    // ne kívülről jöjjön az adat!
        let weapon1 = glad1.weapon
        let weapon2 = glad2.weapon
        let winner = ""
        let loser = ""


        // privát medótusba kitenni, hogy "check if Maximus..." (42-48 sor)

        if (glad1.name === "Maximus") {
            winner = glad1.name             // a winner - loser változókba se csak a nevet rakjuk!
            loser = glad2.name }

        else if (glad2.name === "Maximus") {
            winner = glad2.name
            loser = glad1.name }

        // privát medótusba kitenni, hogy "check if fegyver ..." (42-48 sor)

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

export default Arena