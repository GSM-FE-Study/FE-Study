function solution(numbers) {
  if (numbers.join("").replaceAll("0", "").length === 0) return "0";
  return numbers
    .sort((a, b) => {
      const [na, nb] = [String(a), String(b)];
      const ab = na + nb;
      const ba = nb + na;
      return ba - ab;
    })
    .join("");
}
