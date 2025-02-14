function isOldEnoughToVote(age) {
  // your code here
  return age >=18
}

let output = isOldEnoughToVote(22);
console.log(output); // --> true

console.log(isOldEnoughToVote(17));
console.log(isOldEnoughToVote(18));