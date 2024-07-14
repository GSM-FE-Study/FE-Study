function solution(num_list, n) {
  const answer = [];
  const list = [...num_list];

  for (let i = 0; i < num_list.length / n; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(list[0]);
      list.shift();
    }
    answer.push(temp);
  }

  return answer;
}
