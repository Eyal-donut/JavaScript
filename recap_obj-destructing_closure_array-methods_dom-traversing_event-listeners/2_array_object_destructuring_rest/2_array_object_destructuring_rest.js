const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      },
      {
        id: 6,
        name: "Sam Brown",
        age: 32
      },
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];

// Example
// Get the street and city from the address object of the last 2 people
const [, ...lastTwoPeople] = data;

const [firstPerson, secondPerson] = lastTwoPeople;

const [{ address: { street, city } }, { address: { street: street1, city: city1 } }] = lastTwoPeople;

console.log(street, city, street1, city1);


// ARRAY DESTRUCTURING

// Exercise 1: Use array destructuring to get the first two hobbies of the first person in the data array
const [firstPerson1] = data;
const {hobbies} = firstPerson1
const [firstHobby, secondHobby] = hobbies
console.log(firstHobby, secondHobby)




// Exercise 2: Use array destructuring to get the first and third friend of the second person in the data array
const [, secondPerson1] = data
const {friends} = secondPerson1
const [firstFriend, ,thirdFriend] = friends
console.log(firstFriend, thirdFriend)


// OBJECT DESTRUCTURING

// Exercise 1: Use object destructuring to get the name, age, and city of the third person in the data array
const[, , thirdPerson] = data
const {name} = thirdPerson
const {age} = thirdPerson
const {address} = thirdPerson
const {city: city2} = address
console.log('Name:', name, 'Age:', age, 'City:', city2) 

// Exercise 2: Use object destructuring to get the name and age of the first friend of the third person in the data array
const [,,thirdPerson2] = data
console.log('Huuuuuuuuuuuuuuuuuuuuuuu', thirdPerson2)
const {friends: friends3} = thirdPerson2
const [firstFriend2] = friends3
const {name: name4, age: age2} = firstFriend2
console.log(name4, age2)



// THE REST OPERATOR

// Exercise 1: Put the last two objects from the data array in a new array
const[,...restTwo] = data
console.log(restTwo)

// Exercise 2: Put the last friend of the first person in a new array
const [firstPerson2] = data
// console.log(firstPerson2)
const { friends: friends2 } = firstPerson2
const [,...lastFriend] = friends2
console.log('HEEEEEEEE', lastFriend)