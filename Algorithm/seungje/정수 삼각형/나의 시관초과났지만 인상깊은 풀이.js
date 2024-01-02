function solution(triangle) {
  var answer = 0;

  dfs(0, 0, 0);

  function dfs(sum, vec, defth) {
    if (defth === triangle.length - 1) {
      const newAnswer = sum + triangle[defth][vec];
      if (answer < newAnswer) answer = newAnswer;
      return;
    }

    if (triangle[defth + 1][vec])
      dfs(sum + triangle[defth][vec], vec, defth + 1);
    dfs(sum + triangle[defth][vec], vec + 1, defth + 1);
  }

  return answer;
}
