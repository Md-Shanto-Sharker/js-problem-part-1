// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function lWord(word){
    const words = word.split(" ");
    let longestWord = '';
    for(let word of words){
        if(word.length>longestWord.length){
            longestWord=word;
        }
       
    }
    return longestWord;
}

const word = 'I am learning Programming to become a programmer';
const result = lWord(word);
console.log(result);