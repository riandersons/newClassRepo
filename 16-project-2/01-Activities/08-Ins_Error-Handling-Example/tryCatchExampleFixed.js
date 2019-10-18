// Get filename from user
const filename = process.argv[2];
const readFile = require("./helpers").readFile;

// Try to read from the file system, but move on if there"s an issue.
try {
  readFile(filename);
}
catch (err) {
  console.log("Error reading " + filename + ". Error logged. Continuing...");
}

console.log("The rest of your program worked!");
