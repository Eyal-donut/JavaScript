const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

/* const namesFromArray = (arr) => {
        const result = arr.map(function (na) {
            return na.name
        })
        return result
    }
    console.log(namesFromArray(data))

    const before1990 = (arr) => {
        const adultsArray = []
        arr.forEach(function (year){
            if (Number(year.birthday.substr(-4)) < 1990) {
                adultsArray.push(year)
            }
        })
        console.log(adultsArray)
        return adultsArray
    }
    console.log(before1990(data)) */

//  const howMuchFood = (arr) => {
//      const favFoods = arr.map(function (foo){
//          return foo.favoriteFoods.meats   foo.favoriteFoods.meats
//      })
//      console.log(favFoods)
//  }
//  console.log(howMuchFood(data))

const howMuchFood = (arr) => {
  const food1 = [];
  const food2 = [];
  const obj = {};
  arr.forEach(function (element) {
    food1.push(element.favoriteFoods.meats);
    food2.push(element.favoriteFoods.fish);
  });

  const food3 = [...food1, ...food2].flat();

  for (const i of food3) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }
  return obj;
};
console.log(howMuchFood(data));
