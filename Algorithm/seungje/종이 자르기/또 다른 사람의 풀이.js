function solution(M, N) {
  var [X, Y] = M > N ? [M, N] : [N, M];
  var answer = 0;
  for (let i = 1; i < Y; i++) answer += i + i + 1;
  answer += (X - Y) * Y;

  return answer;
}
