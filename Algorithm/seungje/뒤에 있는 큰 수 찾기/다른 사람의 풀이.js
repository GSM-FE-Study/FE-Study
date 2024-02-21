function solution(numbers) {
  var answer = Array(numbers.length);
  var check = [0];
  for (var i = 1; i < numbers.length; i++) {
    while (check.length && numbers[check[check.length - 1]] < numbers[i]) {
      answer[check.pop()] = numbers[i];
    }
    check.push(i);
  }
  while (check.length) {
    answer[check.pop()] = -1;
  }
  return answer;
}
