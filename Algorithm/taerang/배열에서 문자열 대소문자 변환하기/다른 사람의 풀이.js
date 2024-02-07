const solution = (strs) =>
  strs.reduce(
    (acc, cur, idx) => [
      ...acc,
      idx % 2 === 0 ? cur.toLowerCase() : cur.toUpperCase(),
    ],
    []
  );
