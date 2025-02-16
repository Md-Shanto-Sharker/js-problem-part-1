/**
 * function take an array as parameter give me the average of the odd numbers in the array
 */

function oddAverage(numbers) {
    let count = 0;
    let sum = 0;
    for(let i of numbers){
        if(i%2!==0){
            count++
            sum=sum+i;
        }
    }
    return  sum/count;
}
const numbers = [42, 13, 58, 65, 81,96,7,5];
const result = oddAverage(numbers);
console.log("average is: ", result);
