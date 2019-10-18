// Solution 1 - More Obvious
const a = process.argv[2];
const b = process.argv[3];

if (a === b) {
  console.log(true);
}
else {
  console.log(false);
}


// Solution 2 - Simplified (Re-factored)
console.log(process.argv[2] === process.argv[3]);
