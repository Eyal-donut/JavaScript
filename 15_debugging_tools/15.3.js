function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] +
    arr[9];
    }
    console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

    //first problem: print the result: so I added clg.

    //second: result is NaaN. Then I noticed that arr[10] is not a part of the array -> not a number. I changed the right indexes of the array to target the wished numbers.