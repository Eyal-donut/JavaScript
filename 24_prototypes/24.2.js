function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pikachu = new Pokemon("Pikachu", "Electric", [
  "Volt Tackle",
  "Electroweb",
  "Iron Tail",
]);

const mewtwo = new Pokemon("Mewtwo", "Physic", [
  "Fire Punch",
  "Thunder Punch",
  "Power-Up Punch",
]);

const snorlax = new Pokemon("Snorlax", "Normal", ["Lick", "Hyper Beam"]);

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name}`;
};

Pokemon.prototype.attack = function (attackNum) {
  return `${this.name} used ${this.attackList[attackNum]}`;
};

console.log(pikachu.callPokemon());
console.log(pikachu.attack(0));

console.log(mewtwo.callPokemon());
console.log(mewtwo.attack(0));

console.log(snorlax.callPokemon());
console.log(snorlax.attack(0));
