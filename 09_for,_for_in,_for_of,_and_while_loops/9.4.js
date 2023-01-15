const stepMaker = (N) => {
  for (let i = 1; i <= N; i++) {
    let arr = [];
    for (let j = 1; j <= N; j++) {
        j <= i ? arr.push('#') : arr.push(' ')
    }
    console.log(arr.toString().replaceAll(","," "))
  }
};
stepMaker(3)