function solution(array, n) {
  var answer = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer++;
    }
  }
  return answer;
}
