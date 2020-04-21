
// ## Factor a Number

// Write a function factors which is given a number and returns an array containing all its factors. 

// What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number


// var factors = (num) => {
//     let fac = [], i = 1, ind = 0;
    
//     while (i <= Math.floor(Math.sqrt(num))) {
//       //inserting new elements in the middle using splice
//       if (num%i === 0) {
//         fac.splice(ind,0,i);
//         if (i != num/i) {
//           fac.splice(-ind,0,num/i);
//         }
//         ind++;
//       }
//       i++;
//     }
    
//     //swapping first and last elements
//     let temp = fac[fac.length - 1];
//     fac[fac.length - 1] = fac[0];
//     fac[0] = temp;
    
//     // nice sorted array of factors
//     return fac;
//     };
//     console.log(factors(100));


function factor(num){
    let result = []; 
    for (let count = 0; count<= num; count++){
        if (num % count == 0) {
            result.push(count)
        }
    }

return result;
}
console.log(factor(9));

// for (let count = startnum; count <= endnum; count++) {
//     console.log(count);
// }  
