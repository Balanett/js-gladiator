# JS Gladiator Arena

The Emperor has commissioned you to build a Gladiator Arena. You will do so using your knowledge of object-oriented Javascript and ES6 classes.

All of your Javascript code will be written in `gladiator.js` and `arena.js`. You can test your code by opening `index.html` in the browser and interacting with the console.

## Part 1: The Gladiator

Create a `Gladiator` class that has the following properties...
- a `name`
- a `weapon` (one of Spear, Club, Trident)

Once defined, you should be able to do the following...

```js
var max = new Gladiator("Maximus", "Trident")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"
```

### Bonus

Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything aside from Spear, Club or Trident. That means running code like `new Gladiator("Jesse", "Taco")` would throw an error

## Part 2: The Arena

Create an `Arena` class that meets the following criteria...

### An arena has a name

```js
var colosseum = new Arena("Colosseum")
console.log(colosseum.name) // => Colosseum
```
### The name should be capitalized

```js
var colosseum = new Arena("megalopolis")
console.log(colosseum.name) // => Megalopolis
```

### An arena can have gladiators

```js
var colosseum = new Arena("Colosseum")
console.log(colosseum.gladiators) // => []
```

### You can add a gladiator to the arena

```js
var max = new Gladiator("Maximus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
console.log(colosseum.gladiators) // => [Gladiator]
```

### The arena should never have more than 2 gladiators in it at a time

```js
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Sword")
var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators.length) // => 2
```

### If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions
- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated.

```js
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]
```

### Bonus

* Add a method to remove gladiators from the arena by name
* Update your winning conditions so that if the gladiator named "Maximus" is in the fight, he wins.
* Add a method to check to see if the crowd is entertained (`.entertained?`). The crowd is only entertained if Maximus is in the arena.
* Before a losing gladiator is eliminated, the user should be prompted to put their thumbs up or down. If user votes down, the losing gladiator is removed. If the user votes up, the gladiator stays in the arena and his opponent is removed. (Life isn't fair.)
