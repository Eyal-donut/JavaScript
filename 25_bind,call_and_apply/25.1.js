const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
console.log(hero.getStrength.this)

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

//why it didn't work: when calling getStrength in line 14, it gets the value of undefined, unless we bind it to sth.

let binding = hero.getStrength.bind(hero);
console.log(whoIsStronger(binding));
