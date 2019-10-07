// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0
// }

function vowels(str) {
    let counter = 0
    const matchString = ['a', 'e', 'i', 'o', 'u', 'abc', 1]

    for ( let char of str.toLowerCase() ) {
        if ( matchString.includes(char) ) {
            counter++
        }
    }

    return counter
}

// MY SOLUTION
//function vowels(str) {
//     let numVowels = 0
//     let newStr = str.toLowerCase().split('')
//     for ( i = 0; i < str.length; i++) {
//         if (newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u') {
//             numVowels += 1 
//         } 
//     }
//     return numVowels
// }

vowels('Hi There!')

module.exports = vowels;
