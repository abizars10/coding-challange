// function boolToWord( bool ){
//     if(bool){
//         return 'Yes'
//     }else{
//         return "No"
//     }

//     return bool ? 'Yes' : 'No'
//   }

const boolToWord = (bool) => (bool ? "Yes" : "No");

console.log(boolToWord(true));
console.log(boolToWord(false));
