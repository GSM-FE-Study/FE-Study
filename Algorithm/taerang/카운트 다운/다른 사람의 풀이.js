const solution = (start, end) =>
  Array(start - end + 1)
    .fill(start)
    .map((v, i) => v - i);

//
