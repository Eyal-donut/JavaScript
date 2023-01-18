function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (b > a && c > a) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));

//No error messages, but no result printed. I added clg to the result.

//ReferenceError: findSmalest is not defined. So I noticed the typo.

//66 is not smallest, so I looked at the line of return b. This is the default, so I looked at the conditions, and changed them.
