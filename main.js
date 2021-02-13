import {Gladiator} from "./gladiator.js";
import {Arena} from "./arena.js";

// Create gladiators:

var glad1 = new Gladiator("Maximus", "Spear")
var glad2 = new Gladiator("Spartacus", "Trident")
var glad3 = new Gladiator("Titus", "Club")

console.log("1st gladiator: "+glad1.name+", Weapon: "+glad1.weapon)
console.log("2nd gladiator: "+glad2.name+", Weapon: "+glad2.weapon)
console.log("3rd gladiator: "+glad3.name+", Weapon: "+glad3.weapon)


// Create arena:

var arena = new Arena("colosseum")
console.log("Arena: "+arena.name)

// Add Gladiator:

arena.addGladiator(glad1)
arena.addGladiator(glad2)

/* Add 3rd gladiator:

arena.addGladiator(glad3)

 */

console.log(arena.name+"'s gladiators: "+arena.gladiators)

// Fight:

arena.fight(glad1, glad2)
