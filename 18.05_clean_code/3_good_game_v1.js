/*
  * Here we separate the logic for creating player and enemy objects, handling attacks, healing, and leveling up into different functions, and use methods within the player and enemy objects. 
  * This allows for better organization and separation of concerns, but it also makes it less readable, maintainable and reusable.
*/

// Function to create player object
// ? Can use arrow functions because we're not using the 'this' keyword ?
const createPlayer = (name) => {
  return {
    name,
    health: 100,
    level: 1,
    weapon: "sword",
    inventory: ["shield", "healing potion"],
    attack: (enemy) => attack(enemy, name, weapon),
    heal: () => heal(name, health),
    levelUp: () => levelUp(name, level),
  };
};

// Function to create enemy object
const createEnemy = (name, health, level, weapon) => {
  return {
    name,
    health,
    level,
    weapon,
    attack: (player) => attack(player, name, weapon),
  };
};

// Function to handle the attack action
const attack = (target, attackerName, attackerWeapon) => {
  let damage = Math.floor(Math.random() * 10) + 1;
  target.health -= damage;
  alert(`${attackerName} attacked ${target.name} with a ${attackerWeapon} and dealt ${damage} damage. ${target.name}'s remaining health: ${target.health}`);
};

// Function to handle the heal action
const heal = (name, health) => {
  let healing = Math.floor(Math.random() * 20) + 1;
  health += healing;
  alert(`${name} used a healing potion and recovered ${healing} health. ${name}'s remaining health: ${health}`);
};

// Function to handle the level up action
const levelUp = (name, level) => {
  level++;
  alert(`Congratulations, ${name} has reached level ${level}`);
};

// Function to play the game
const playGame = () => {
  const playerName = prompt("What's your name?");
  const player = createPlayer(playerName);
  const enemy = createEnemy("Goblin", 50, 1, "club");

  while (player.health > 0 && enemy.health > 0) {
    let action = prompt("What do you want to do? (attack, heal, run)").toLowerCase();
    if (action === "attack") {
      player.attack(enemy);
      if (enemy.health > 0) {
        enemy.attack(player);
      }
    } else if (action === "heal") {
      player.heal();
      enemy.attack(player);
    } else if (action === "run") {
      alert(`${ player.name } ran away from ${ enemy.name }`);
      break;
    }
    if (enemy.health <= 0) {
      player.levelUp();
      player.inventory.push(enemy.weapon);
      alert(`${ player.name } defeated ${ enemy.name } and found a ${ enemy.weapon }.Inventory: ${ player.inventory }`);
      break;
    }
    if (player.health <= 0) {
      alert(`${ player.name } was defeated by ${ enemy.name }`);
      return;
    }
  }
};

playGame();
