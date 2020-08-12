
const mutateTheArray = (n, a) => {
  let b = new Array();
  for (let i = 0; i < a.length; i++) {
    b[i] = (typeof a[i - 1] !== "undefined" ? a[i - 1] : 0)
      + a[i] + (typeof a[i + 1] !== "undefined" ? a[i + 1] : 0);
    
  }
  return b;
}


const n = 5;
const a = [4, 0, 1, -2, 3];

console.log(mutateTheArray(n, a));
