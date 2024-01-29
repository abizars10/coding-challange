function zeroFuel(distanceToPump, mpg, fuelLeft) {
  // if(distanceToPump / mpg <= fuelLeft){
  //     return true
  // }else{
  //     return false
  // }

  return distanceToPump / mpg <= fuelLeft ? "True" : "False";
}

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft
//   };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(50, 25, 2));
