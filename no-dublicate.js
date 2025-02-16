/**
 * array has some duplicate elements
 */

const biryanikhor = ['abul','babul','cabul','abul','babul','dabul','kabul','cabul'];

 function noDuplicate(array){
    let unique=[];
    for(let item of array){
        if(unique.includes(item)===false){
            unique.push(item)
        }
    }
    return unique;
 }
 const uniqueArray = noDuplicate(biryanikhor);
 console.log(uniqueArray);

/**
 * use the number input
 */
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 81];
function uniqueNumber(number) {
  let array = [];
  for (let i = 0; i < number.length; i++) {
    if (array.includes(number[i]) === false) {
      array.push(number[i]);
    }
  }
  return array;
}
const result = uniqueNumber(numbers);
console.log(result);
