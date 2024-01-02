const solution = (myString) =>
  [...myString.toLowerCase()].map((str) => (str === "a" ? "A" : str)).join("");
