const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function ask() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    if (input.toLowerCase() === "q") {
      if (numbers.length === 0) {
        console.log("No numbers entered. Exiting.");
        rl.close();
        return;
      }
      showResults();
      rl.close();
    } else if (isNaN(parseInt(input))) {
      console.log("Invalid input. Please enter an integer or 'q'.");
      ask();
    } else {
      numbers.push(parseInt(input));
      ask();
    }
  });
}

function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function median(arr) {
  let sorted = arr.slice().sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function showResults() {
  console.log("Numbers:", numbers);
  console.log("Mean:", mean(numbers));
  console.log("Median:", median(numbers));
}

ask();
