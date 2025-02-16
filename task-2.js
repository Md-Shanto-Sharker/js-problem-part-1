// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function findNumber(numbers, find) {
  let count = 0;
  for (let i of numbers) {
    if (i === find) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;
const result = findNumber(numbers, find);
console.log(result);

const numbers2 = [5,6,11,12,98, 5]
const find2= 25
const result2 = findNumber(numbers2, find2);
console.log(result2);
