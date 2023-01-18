function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

//return value is 0. 
// I logged the value of counter after the if, withing the loop, and got four times 0, U checked what happens after the loop. It was still Zero, so I looked at the counter, that had a mistake in it.