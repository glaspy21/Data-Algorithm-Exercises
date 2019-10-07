// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g,'')
        .split('')
        .sort()
        .join('')
}

function buildCharMap(str) { 
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char]++ || 1
    }

    return charMap
}

// function anagrams(stringA, stringB) {

//     //create objects with helper function
//     const charMapA = buildCharMap(stringA)
//     const charMapB = buildCharMap(stringB)

//     //check if Object.keys are the same length
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false
//     }

//     //check if the same keys have the same the values
//     for (let prop in charMapA) {
//         if (charMapA[prop] != charMapB[prop]) {
//             return false
//         }
//     }

//     //otherwise return true
//     return true
// }

anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
