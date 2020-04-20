// ## Print a box

// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// ```js
// printBox(6, 4);
// ```

// ```
// ******
// *    *
// *    *
// ******
// ```


// we want to print a box
// row = 1; 

// function printBox(column, row) {
//     var empty = ' ';
//     var asterisk = '*';
//     let count = 1;
//     while (count <= row) {
//       if (count != 1 && count != row) {
//         console.log('*' + empty.repeat(column - 2) + '*')
//       }
//       else {    
//         console.log((asterisk.repeat(column)));
//       }
//       count ++;
//     }
//   }

function printBox(horizontal, vertical){
    const h = "*".repeat(horizontal) + "\n"; 
    const v = "*" + " ".repeat(horizontal - 2) + "*\n";
    console.log(h + v.repeat(vertical - 2) + h);
}

  
printBox(6, 4);
printBox(6, 8);
printBox(7, 11);


// 	function printBox(x, y) { 
//     const outerLine = "*".repeat(x) + "\n";
//     const innerLine = "*" + " ".repeat(x - 2) + "*\n";
//     console.log(outerLine + innerLine.repeat(y - 2) + outerLine);
// 	}

  
// printBox(6, 4);

    
    // while (row <= height) {
    //     return console.log('*')
    //     column = 1
    //     while (column <= width) {

    //         if (column == 1, column == width, row == 1, row == height) 
    //             console.log('*', end = '') 

    //         else 
    //             console.log(' ', end = ' ')
    //             column = column + 1
    //             row = row + 1
    //             console.log()
    //         }   
    //     }
    // }

    // // (let row = startnum; count <= endnum; count++) {
    // //     console.log('*');
    // }  


// width = int(input('Enter the width of the square '))
// height = int(input('Enter the height of the square '))

// row = 1

// while (row <= height):
//     column = 1
// while (column <= width):
//     if (column == 1 or column == width or row == 1 or row == height) :
// print('*', end = ' ')
        
//         else:
// print(' ', end = ' ')
// column = column + 1
// row = row + 1
// print()

// if (age >= 21) {
//     console.log(‘Have a beer!’);
//     } else if (age >= 16) {
//         console.log(‘Have a car!’);
//     } else {
//         console.log(‘Have a startup!’);
//     }



// width = int(input('Enter the width of the square '))
// height = int(input('Enter the height of the square '))

// row = 1

// while(row <= height):
//     column = 1
//     while(column <= width ):
//         if(column == 1 or column == width or row == 1 or row == height) :          
//             print('*', end = ' ')

//         else:
//             print(' ', end = ' ')
//         column = column + 1
//     row = row + 1
//     print()