// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     debugger;
//   return str.split('').reduce((rev, char) => char + rev, '')
// }

// function reverse(str) {
//     return str
//        .split('')
//        .reverse()
//        .join('')
// }

function reverse(str) {
    let reversed = ''
    for( let character of str ) {
        reversed = character + reversed
    }
    return reversed
 }

reverse('hello');

module.exports = reverse;
