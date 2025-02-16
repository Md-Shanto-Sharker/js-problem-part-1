// Task-3:
// Write a function to count the number of vowels in a string.

function vowels(vowels) {
  let count = 0;
  for (let i of vowels) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++
    }
  }
  return count
}
const string = "education";
const result = vowels(string);
console.log(result);



