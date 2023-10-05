// function nonConstructibleChange(coins) {
//   // Write your code here.
//   let sum;
//   let target;

//   coins.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     }
//     return 0;
//   });

//   console.log("coins", coins);

//   for (let i = 1; i < 100; i++) {
//     //lets find that number
//     //console.log("TARGET", i, "==========================");
//     if (coins.includes(i)) {
//       continue;
//     } else {
//       sum = coins[0]; //start with first coin
//       for (let j = 1; j < coins.length; j++) {
//         sum = sum + coins[j]; //add each following coin
//         //console.log("checking sum", sum);
//         if (sum === i) {
//           //if they match target target with i
//           target = i;
//           //console.log("break=================;");
//           break;
//         } else {
//           //if it doesn't match keep adding
//           continue;
//         }
//       }
//     }
//   }

//   return target;
// }

// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

function nonConstructibleChange(coins) {
  // Write your code here.
  if (!coins.length) return 1;
  coins.sort((a, b) => a - b);
  let minChange = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minChange + 1) break;
    minChange += coins[i];
  }
  return minChange + 1;
}
