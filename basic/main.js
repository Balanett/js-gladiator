import {Gladiator} from "./gladiator.js";
import {Arena} from "./arena.js";


// Create gladiators: Can't use invalid weapon! --> THROW ERROR

var glad1 = new Gladiator("Antonius", "Club")
var glad2 = new Gladiator("Maximus", "Trident")
var glad3 = new Gladiator("Titus", "Club")

console.log("CREATE Gladiator --> 1st gladiator: "+glad1.name+", Weapon: "+glad1.weapon)
console.log("CREATE Gladiator --> 2nd gladiator: "+glad2.name+", Weapon: "+glad2.weapon)
console.log("CREATE Gladiator --> 3rd gladiator: "+glad3.name+", Weapon: "+glad3.weapon)


// Create arena:

var arena = new Arena("colosseum")
console.log("CREATE Arena --> Arena: "+arena.name)


// Add Gladiator: Can't add 3rd gladiator --> THROW ERROR

arena.addGladiator(glad1)
arena.addGladiator(glad2)
// arena.addGladiator(glad3)

console.log("ADD Gladiators --> "+arena.name+"'s gladiators: "+arena.gladiators)


// Checking entertainment:

const gladList = arena.gladiators
arena.checkEntertainment(gladList)


// Fight:

const resultOfFight = arena.fight(glad1, glad2)
const winnerGlad = resultOfFight[0]
const loserGlad = resultOfFight[1]
console.log("FIGHT --> The winner is... "+winnerGlad+"!")
if (resultOfFight[0] === "Nobody won") {
    console.log("Your gladiators are dead together!")
} else {
    // Judgement:

    let judgement = window.prompt("My judgement is... (thumb up / thumb down)")
    let filteredArena = ""

    if (judgement === "thumb up") {
        filteredArena = arena.removeGladiator(gladList, loserGlad)
        arena.gladiators = filteredArena
        console.log("REMOVE Gladiator --> The FINAL WINNER is... "+arena.gladiators+"!")
        console.log("He won his freedom!")
    } else if (judgement === "thumb down") {
        filteredArena = arena.removeGladiator(gladList, winnerGlad)
        arena.gladiators = filteredArena
        console.log("REMOVE Gladiator --> The FINAL WINNER is... "+arena.gladiators+"!")
        console.log("Life is not always fair.")
    }
}

