function solution(arr) {
  if (arr.length !== 1) {
    let index = 0;
    const answer = arr;

    for (let i = 1; i < answer.length; i++)
      if (answer[i] < answer[index]) index = i;

    answer.splice(index, 1);

    return answer;
  }
  return [-1];
}
