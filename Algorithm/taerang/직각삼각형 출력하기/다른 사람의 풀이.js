const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const text = Array(+input[0])
    .fill(0)
    .map((v, i) =>
      Array(i + 1)
        .fill("*")
        .join("")
    )
    .join("\n");

  console.log(text);
});
