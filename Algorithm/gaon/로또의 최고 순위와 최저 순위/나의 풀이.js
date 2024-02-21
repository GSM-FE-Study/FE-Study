const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };

function solution(lottos, win_nums) {
  const answer = [];
  let zeroCount = 0;
  let correctCount = 0;

  lottos.forEach((n, i) => {
    n !== 0 ? win_nums.includes(n) && correctCount++ : zeroCount++;
  });

  return [rank[correctCount + zeroCount], rank[correctCount]];
}
