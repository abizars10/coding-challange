// function positiveSum(arr) {
//     let sum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          if (arr[i] > 0) {
//              sum += arr[i];
//          }
//      }
//      return sum;
//  }

// function positiveSum(arr){
//     return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
// }

const positiveSum = (arr) => arr.reduce((sum, num) => (num > 0 ? sum + num : sum));

console.log(positiveSum([1, -4, 7, 12]));
