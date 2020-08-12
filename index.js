
const mutateTheArray = (n, a) => {
  return a.map((_, i) => {
    return (typeof a[i - 1] !== "undefined" ? a[i - 1] : 0)
      + a[i] + (typeof a[i + 1] !== "undefined" ? a[i + 1] : 0);
  });
}

const mutateTheArray2 = (n, a) => {
  let b = new Array();
  for (let i = 0; i < a.length; i++) {
    b[i] = (typeof a[i - 1] !== "undefined" ? a[i - 1] : 0)
      + a[i] + (typeof a[i + 1] !== "undefined" ? a[i + 1] : 0);
    
  }
  return b;
}

const mutateTheArray3 = (n, a) => {
  let b = new Array();
  for (let i = 0; i < n; i++) {
    b[i] = (typeof a[i - 1] !== "undefined" ? a[i - 1] : 0)
      + a[i] + (typeof a[i + 1] !== "undefined" ? a[i + 1] : 0);
    
  }
  return b;
}

const n = 5;
const a = [4, 0, 1, -2, 3];

console.time('mutateTheArray')
mutateTheArray(n, a);
console.timeEnd('mutateTheArray')


console.time('mutateTheArray2')
mutateTheArray2(n, a);
console.timeEnd('mutateTheArray2')


console.time('mutateTheArray3')
mutateTheArray3(n, a);
console.timeEnd('mutateTheArray3')


