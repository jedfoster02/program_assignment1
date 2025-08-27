const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const nums = []; //stores valid integers

function isIntegerString(s) {
  return /^[-+]?\d+$/.test(s.trim());
}

//quit condition
function ask() {
  rl.question("Enter an integer (or 'q' to quit): ", (raw) => {
    const input = raw.trim();

    if (input.toLowerCase() === "q") {
      summarize();
      rl.close();
      return;
    }

    //validating integer
    if (!isIntegerString(input)) {
      console.log("Invalid input. Please enter an integer or 'q' to quit.");
      return ask();
    }

    //storing and echoing the integer
    const val = parseInt(input, 10);
    nums.push(val);
    console.log(`You entered: ${val}`);

    ask(); 
  });
}

// find any a, b, c, in numbers such that a + b = c
function findProductTriplet(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      const product = arr[i] * arr[j];
      for (let k = 0; k < arr.length; k++) {
        if (k === i || k === j) continue;
        if (product === arr[k]) {
          return { a: arr[i], b: arr[j], c: arr[k] };
        }
      }
    }
  }
  return null;
}

function summarize() {
  console.log("Summary");
  console.log(`Numbers entered (${nums.length}): [${nums.join(", ")}]`);

  if (nums.length < 3) {
    console.log("Not enough numbers to check the condition (need at least 3).");
    return;
  }

  const result = findProductTriplet(nums);
  if (result) {
    console.log(`Condition is met: ${result.a} x ${result.b} = ${result.c}`);
  } else {
    console.log("Condition was not met.");
  }
  
}

ask();
