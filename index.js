const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mutateTheArray = (n, a) => {
  let b = new Array(n);
  for (let i = 0; i < n; i++) {
    b[i] = (typeof a[i - 1] !== "undefined" ? a[i - 1] : 0)
      + a[i] + (typeof a[i + 1] !== "undefined" ? a[i + 1] : 0);
    
  }
  return b;
}

rl.question("Given an integer n: ", function(nInput) {
  let n = parseInt(nInput);
  if (isNaN(n)) {
    throw new Error('n is not an integer');
  }
  rl.question("Given an array a of length n (separated by a space): ", function(arrInput) {
    let myArr = arrInput.split(' ').filter(i => i !== '').map(i => {
      let _i = parseInt(i);
      if (isNaN(_i)) throw new Error(`The element ${i} in array is not an integer`);
      return _i;
    });
    if (n !== myArr.length) {
      throw new Error('The length of the array is not equal to n');
    }
    console.log(mutateTheArray(n, myArr));
    rl.close();
  });
});
