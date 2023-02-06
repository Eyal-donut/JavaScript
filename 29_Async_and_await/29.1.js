// const getIDs = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([532, 543, 753, 1, 5]);
//     }, 1500);
//   });

// // async function getIDs() {
// //   setTimeout(() => {
// //     const response = await[(532, 543, 753, 1, 5)];
// //     return response;
// //   }, 1500);
// // }

// // async function getRecipe(recipeID) {
// //   try {
// //     setTimeout(
// //       (ID) => {
// //         const recipe = {
// //           title: "Fresh tomato pasta",
// //           publisher: "Pinchas Hodadad",
// //         };
// //         const recipeGot = await`${ID}: ${recipe.title}`;
// //         return recipeGot;
// //       },
// //       1500,
// //       recipeID
// //     );
// //   } catch (error) {
// //     console.log("It is an error");
// //   }
// // }

// const getRecipe = (recipeID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = {
//           title: "Fresh tomato pasta",
//           publisher: "Pinchas Hodadad",
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       1500,
//       recipeID
//     );
//   });
// };

// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log("It is an error!");
//   });

//get an array of ids(result is array), get a receipe with the id with the index of two (result: ID: recepit name)

async function getReceiptAndID (){
    try {
        let response = []
    setTimeout(()=> {
        response = [532, 543, 753, 1, 5]
    }, 1500)
        console.log(response)
        const receipt = {
            title: "Fresh tomato pasta",
            publisher: "Pinchas Hodadad",
          };
        const ID = await response[2]
          console.log(`${await ID}: ${receipt.title}`)
}catch (error){
    console.log('It is an error')
}
}

getReceiptAndID()

