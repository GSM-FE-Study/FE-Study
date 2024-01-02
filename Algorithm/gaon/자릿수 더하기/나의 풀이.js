const solution = (n) => {
  let answer = 0;
  [...n.toString()].forEach((i) => (answer += Number(i)));
  return answer;
};
