// Object - packaging up related data & functionality together.

// Object literal:
const player = {
  numLives: 4,
  name: "Mike",
  stats: {
    attack: 5,
    defense: 3,
    agility: 2,
  },
  addExtraLife() {
    this.numLives++;
  },
  printInfo() {
    // this = player
    console.log(`The player ${this.name} has ${this.numLives} lives remaining.`);
  },
};

// Dot syntax to access properties:
console.log(`The player ${player.name} has ${player.numLives} lives remaining.`);
// Or bracket notation
console.log(`The player ${player["name"]} has ${player["numLives"]} lives remaining.`);
console.log(`The player has an attack of: ${player.stats.attack}.`);
player.addExtraLife();
player.printInfo();

// Classes:
class Character {
  constructor(name, career) {
    this.name = name;
    this.career = career;
  }

  greet() {
    console.log(`My name is ${this.name} and my career is ${this.career}.`);
  }
}

const brandy = new Character("Brandy", "Bard");
brandy.greet();

const tina = new Character("Tina", "Thief");
tina.greet();
