function solution(prices) {
  var answer = [];
  let num = 0;

  while (num < prices.length) {
    let time = 0;
    for (let i = num + 1; i < prices.length; i++) {
      if (prices[num] <= prices[i]) {
        time += 1;
      }
      if (prices[num] > prices[i]) {
        time += 1;
        break;
      }
    }
    answer.push(time);
    num++;
  }

  return answer;
}
