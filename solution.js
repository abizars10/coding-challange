function solution(str) {
  const char = str.split("");
  const reverseChar = char.reverse();
  const result = reverseChar.join("");
  return result;
}

// const solution = (str) => str.split('').reverse().join('')

console.log(solution("world"));
