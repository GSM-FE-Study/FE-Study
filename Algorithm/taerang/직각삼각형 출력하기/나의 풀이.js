const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = parseInt(line);

  for (let i = 1; i <= input; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }

  rl.close();
}).on("close", function () {
  process.exit();
});
