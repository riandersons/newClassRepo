// Gets the myBands object from the bands file.
const bandList = require("./bands.js");

// Loop through band list and print out details
for (let key in bandList) {
  console.log("A " + key + " band is " + bandList[key] + ".");
}
