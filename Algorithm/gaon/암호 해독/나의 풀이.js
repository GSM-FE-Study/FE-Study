function solution(cipher, code) {
  const answer = [];
  [...cipher].forEach((item, index) => {
    (index + 1) % code === 0 && answer.push(item);
  });

  return answer.join("");
}
