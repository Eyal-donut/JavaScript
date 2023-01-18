// function getSum(arr1, arr2) {
//   let sum = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
//   return sum;
// }
// console.log(getSum([1, 2, 3], [5, 66, 23]));

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
    }
    console.log(getSum([1,2,3],[5,66,23]));

    //step one: error running the file saying arr1 is undefined. I used a debugger breakpoint at the start of the function, it's already coming in undefined. So I looked at the summuning of the function and noticed a missing comma. 

    //step two: trying to run again. error: TypeError: Assignment to constant variable. So I changed const to let.

    //step 3: no error, but no result. so I added return sum, and added a console log while summuning the function.


    