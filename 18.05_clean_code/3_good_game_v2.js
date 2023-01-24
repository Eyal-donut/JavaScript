/*
  * This code is much more readable, maintainable, and reusable. 
  * The logic is abstracted into two separate functions, createPlayer and createEnemy, which return objects with properties and methods that represent a player and an enemy in the game. 
  * These objects can now be reused.
  * By using regular function syntax and the this keyword within the methods we can refer to the parent object (the player or enemy), which makes it more readable, maintainable and reusable. 
  * This is because the logic is abstracted into two separate functions, createPlayer and createEnemy, which return objects with properties and methods that represent a player and an enemy in the game. 
  * These objects can now be reused.
*/


// Function to create the player object
const createPlayer = (name) => {
  return {
    name,
    health: 100,
    level: 1,
    weapon: "sword",
    inventory: ["shield", "healing potion"],
    attack(enemy) {
      let damage = Math.floor(Math.random() * 10) + 1;
      enemy.health -= damage;
      alert(`${name} attacked ${enemy.name} with a ${this.weapon} and dealt ${damage} damage. ${enemy.name}'s remaining health: ${enemy.health}`);
    },
    heal() {
      let healing = Math.floor(Math.random() * 20) + 1;
      this.health += healing;
      alert(`${name} used a healing potion and recovered ${healing} health. ${name}'s remaining health: ${this.health}`);
    },
    levelUp() {
      this.level++;
      alert(`Congratulations, ${name} has reached level ${this.level}`);
    }
  };
};

// Function to create the enemy object
const createEnemy = (name, health, level, weapon) => {
  return {
    name,
    health,
    level,
    weapon,
    attack: (player) => {
      let damage = Math.floor(Math.random() * 10) + 1;
      player.health -= damage;
      alert(`${name} attacked ${player.name} with a ${weapon} and dealt ${damage} damage. ${player.name}'s remaining health: ${player.health}`);
    }
  };
};

// Function to start the game
const playGame = () => {
  // Create the player object
  const player = createPlayer(prompt("What's your name?"));
  // Create the enemy object
  const enemy = createEnemy("Goblin", 50, 1, "club");

  // Game loop
  while (player.health > 0 && enemy.health > 0) {
    // Get player's action
    let action = prompt("What do you want to do? (attack, heal, run)");
    if (action === "attack") {
      player.attack(enemy);
      if (enemy.health > 0) {
        enemy.attack(player);
      }
    } else if (action === "heal") {
      player.heal();
      enemy.attack(player);
    } else if (action === "run") {
      alert(`${player.name} ran away from ${enemy.name}`);
      break;
    }
    // Check if the enemy is defeated
    if (enemy.health <= 0) {
      player.levelUp();
      player.inventory.push(enemy.weapon);
      alert(`${player.name} defeated ${enemy.name} and found a ${enemy.weapon}. Inventory: ${player.inventory}`);
      break;
    }
    // Check if the player is defeated
    if (player.health <= 0) {
      alert(`${player.name} was defeated by ${enemy.name}`);
      return;
    }
  }
};

playGame();
