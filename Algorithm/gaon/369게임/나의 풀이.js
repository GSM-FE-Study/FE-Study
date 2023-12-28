const solution = (order) =>
  [...order.toString()].filter((i) => i === "3" || i === "6" || i === "9")
    .length;
