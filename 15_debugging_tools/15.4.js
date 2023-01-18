function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    } return sum/arr.length ;
    }
    console.log(calcAverage ([ 85 , 90 , 92 ]));

//first run with clg: Nan. The first variable the gives me the average is sum. I see a mistake in declaring sum, it is undefined.

//second: I get a sum of array and not average, so I devide by arr.length.
