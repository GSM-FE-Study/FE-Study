function solution(sequence, k) {
  var answer = [0, sequence.length - 1];
  let left = 0;
  let right = 0;

  let sum = sequence[left];
  while (right < sequence.length) {
    if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      let distance = answer[1] - answer[0];
      let currentDistance = right - left;
      if (distance > currentDistance) {
        answer = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }

  return answer;
}
