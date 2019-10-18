// Take in an input value in the form of an integer
const inputNum = parseInt(process.argv[2]);
let sum = 0;

// Go from 6 to the number. Adding up 6 each time (to only get multiples of 6).
for (let i = 6; i <= inputNum; i += 6) {

  // Each time add i to the sum. (ex: 6, 12, 18, etc.)
  sum += i;
}

// Print out the sum
console.log(sum);

// Example:
// User Input: node multiple 12
// Output: 18 (6 + 12 = 18)

