// function makeNegative(num){
// if(num > 0 ){
//     return -num
// }else{
//     return num
// }
// }

// function makeNegative(num){
//     return num > 0 ? -num : num
// }

const makeNegative = (num) => (num > 0 ? -num : num);

console.log(makeNegative(42));
