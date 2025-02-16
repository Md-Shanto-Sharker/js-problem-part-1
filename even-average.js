/**
 * function take an array as parameter give me the average of the even numbers in the array
 */
function evenAverage(numbers) {
  let even = [];
  for (let i of numbers) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  let sum = 0;
  for (let n of even) {
    sum = sum + n;
  }
  const count = even.length;
  return sum / count;
}
const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const result = evenAverage(numbers);
console.log(result);
