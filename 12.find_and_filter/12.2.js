const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  let result = candyStore.candies.filter((candy) => {
    return candy.id.includes(id);
  });
  console.log(result);
}
getCandy(candyStore, "as12f");


function getPrice(candyStore, id) {
  let result2 = candyStore.candies.filter((candy) => {
    const price = candy.price;
    if (candy.id.includes(id)) {
      console.log(price);
    }
  });
}
getPrice(candyStore, "as12f");

function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({
        name: String(name),
        id: String(id),
        price: Number(price),
        amount: 1,
    })
}
(addCandy(candyStore, '123', 'duplo', 12))

function buy(candyStore, id) {
    let result = candyStore.candies.filter(candy => {
        const price = candy.price;
        if (candy.id.includes(id)) {
            candyStore.cashRegister += price;
            candy.amount -= 1;
        }
    })
}
buy(candyStore, "as12f")
console.log(candyStore)