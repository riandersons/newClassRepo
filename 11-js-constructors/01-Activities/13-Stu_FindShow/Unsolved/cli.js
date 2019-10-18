const TV = require("./tv");

// Create a new TV object
const tv = new TV();

const search = process.argv[2];
const term = process.argv.slice(3).join(" ");

if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

if (search === "show") {
  console.log("Searching for TV Show");
  tv.findShow(term);
} else {
  console.log("Searching for TV Actor");
}
