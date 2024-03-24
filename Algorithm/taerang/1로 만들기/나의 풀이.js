function solution(num_list) {
  let answer = 0;

  for (let i = 0; i < num_list.length; i++) {
    let count = num_list[i];

    while (count !== 1) {
      if (count % 2 === 0) {
        // 짝수
        count /= 2;
      } else {
        // 홀수
        count = (count - 1) / 2;
      }
      answer++;
    }
  }

  return answer;
}
