function solution(numbers) {
  var answer = [];

  let max = 0;
  let stack = [];

  numbers.reverse().forEach((v, i) => {
    if (max > v) {
      while (true) {
        if (v < stack[0]) {
          answer.push(stack[0]);
          stack.unshift(v);
          break;
        }
        stack.shift();
      }
    } else {
      max = v;
      answer.push(-1);
      stack = [v];
    }
  });

  return answer.reverse();
}
