const people = ["Greg", "Mary", "Devon", "James"];
for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}
people.shift()
people.pop()
people.push('Matt')
people.push('Eyal')

for (i = 0; i <= people.indexOf('Mary'); i++) {
    console.log(people[i]);
}

let peopleCopy = people.slice(1,2)
console.log(people.indexOf('Mary'))
console.log(people.indexOf('Foo'))
