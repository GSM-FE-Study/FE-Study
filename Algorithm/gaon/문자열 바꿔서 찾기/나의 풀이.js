const solution = (myString, pat) =>
  myString.includes([...pat].map((str) => (str === "A" ? "B" : "A")).join(""))
    ? 1
    : 0;
