// function removeEveryOther(arr){
//     return arr.filter((_, index) => index % 2 === 0);
//   }

const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5]));
