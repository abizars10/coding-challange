// function Declaration
// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// function Expression
// function grow(x) {
//   const result = x.reduce((acc, cur) => acc * cur);
//   return result;
// }

const grow = (x) => x.reduce((acc, cur) => acc * cur);

console.log(grow([1, 2, 3, 4, 5]));
