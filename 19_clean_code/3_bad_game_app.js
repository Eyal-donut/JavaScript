/*
  ! This code is not very readable, maintainable, or reusable. 
  ! It's not clear what the purpose of the code is and there's a lot of duplicated code. 
  ! Also, if we want to reuse the logic somewhere else we would have to copy and paste the entire code.
*/

const playerName = prompt("What's your name?");
let playerHealth = 100;
let playerLevel = 1;
const playerWeapon = "sword";
const playerInventory = ["shield", "healing potion"];

const enemyName = "Goblin";
const enemyHealth = 50;
const enemyLevel = 1;
const enemyWeapon = "club";

const playerAttack = () => {
  const damage = Math.floor(Math.random() * 10) + 1;
  enemyHealth -= damage;
  alert(`${playerName} attacked ${enemyName} with a ${playerWeapon} and dealt ${damage} damage. ${enemyName}'s remaining health: ${enemyHealth}`);
};

const enemyAttack = () => {
  const damage = Math.floor(Math.random() * 10) + 1;
  playerHealth -= damage;
  alert(`${enemyName} attacked ${playerName} with a ${enemyWeapon} and dealt ${damage} damage. ${playerName}'s remaining health: ${playerHealth}`);
};

const playerHeal = () => {
  const healing = Math.floor(Math.random() * 20) + 1;
  playerHealth += healing;
  alert(`${playerName} used a healing potion and recovered ${healing} health. ${playerName}'s remaining health: ${playerHealth}`);
};

const playerLevelUp = () => {
  playerLevel++;
  alert(`Congratulations, ${playerName} has reached level ${playerLevel}`);
};

while (playerHealth > 0 && enemyHealth > 0) {
  const action = prompt("What do you want to do? (attack, heal, run)");
  if (action === "attack") {
    playerAttack();
    if (enemyHealth > 0) {
      enemyAttack();
    }
  } else if (action === "heal") {
    playerHeal();
    enemyAttack();
  } else if (action === "run") {
    alert(`${playerName} ran away from ${enemyName}`);
    break;
  }
  if (enemyHealth <= 0) {
    playerLevelUp();
    playerInventory.push(enemyWeapon);
    alert(`${playerName} defeated ${enemyName} and found a ${enemyWeapon}. Inventory: ${playerInventory}`);
    break;
  }
  if (playerHealth <= 0) {
    alert(`${playerName} was defeated by ${enemyName}`);
    break;
  }
}
