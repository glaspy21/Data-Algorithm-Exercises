// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n) {
    let results = [];

    for ( i = 0; i < n; i++ ) {
        results.push([])
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while ( startColumn <= endColumn && startRow <= endRow ) {
        //start row
        for ( i = startColumn; i <= endColumn; i++ ) {
            results[startRow][i] = counter;
            counter++
        }
        startRow++

        //endColumn
        for ( i = startRow; i <= endRow; i++ ) {
            results[i][endColumn] = counter;
            counter++
        }
        endColumn--

        //endRow
        for ( i = endColumn; i >= startColumn; i-- ) {
            results[endRow][i] = counter;
            counter++
        }
        endRow--

        //startColumn
        for (i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++
        }
        startColumn++
    }
    return results
}
// function matrix(n) {
//     const results = []

//     for (i = 0; i < n; i++) {
//         results.push([])
//     }

//     let counter = 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     let startColumn = 0;
//     let endColumn = n -1;

//     while (startRow <= endRow && startColumn <= endColumn) {
//         for ( i = startColumn; i <= endColumn; i++ ) {
//             results[startRow][i] = counter;
//             counter ++
//         }
//         startRow++

//         for (i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++
//         }
//         endColumn--

//         for( i = endColumn; i >= startColumn; i-- ) {
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--

//         for (i = endRow; i >= startRow; i--) {
//             results[i][startColumn] = counter;
//             counter++
//         }
//         startColumn++
//     }
//     return results
// }

// function matrix(n) {
//     const results = [];

//     for ( i = 0; i < n; i++ ) {
//         results.push([])
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while ( startColumn <= endColumn && startRow <= endRow ) {
//         //Start row
//         for ( let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++
//         }
//         startRow++;

//         //End Columnn
//         for ( let i = startRow; i <= endRow; i++ ) {
//             results[i][endColumn] = counter;
//             counter++
//         }
//         endColumn--

//         //End Row
//         for ( let i = endColumn; i >= startColumn; i-- ) {
//             results[endRow][i] = counter;
//             counter++ 
//         }
//         endRow--

//         //Start Column
//         for ( let i = endRow; i >= startRow; i-- ) {
//             results[i][startColumn] = counter;
//             counter++
//         }
//         startColumn++
//     }
    
//     return results 
// }

matrix(4)
module.exports = matrix;
  