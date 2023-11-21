const solution = (number) => {
  return [...number].reduce((a, c) => a + Number(c), 0) % 9;
};
