function solution(food) {
  let half = food.reduce(
    (acc, cur, idx) => (acc += idx.toString().repeat(parseInt(cur / 2))),
    ""
  );

  return half + 0 + half.split("").reverse().join("");
}
