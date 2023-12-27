const solution = (myString) => {
  const answer = [...myString]
    .map((i) => (i.charCodeAt() < 108 ? "l" : i))
    .join("");

  return answer;
};
