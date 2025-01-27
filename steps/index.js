// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
      return;
  }

  if ( n === stair.length ) {
      console.log(stair);
      return steps(n, row + 1)
  }

  if (stair.length <= row) {
      stair += '#';
  } else {
      stair += ' ';
  }

  
//n = 3, row = 1, stair = '## ', stair.length = 3
  steps(n, row, stair);
}

// function steps(n) {
//     for (i = 1; i <= n; i++) {
//         console.log(''.padEnd(i, '#').padEnd(n))
//     }
// }

module.exports = steps;
