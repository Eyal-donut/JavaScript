const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: '9 Million',
    neighbors: ['Syria', 'Lebanon', 'Jordan', 'Egypt'],
    describe()  {
        return `${this.country} has ${this.population} people, their mouther tongue is ${this.language} they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
    },
    checkIsland() {
        const island = this.neighbors.length === 0 ? true : false
        return island
    }
}

console.log(myCountry.describe())
console.log(myCountry.checkIsland())



