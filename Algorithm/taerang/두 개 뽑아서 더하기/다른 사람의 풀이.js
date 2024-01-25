function solution(numbers) {
  var answer = [];
  var array = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        array.push(numbers[i] + numbers[j]);
      }
    }
  }

  // console.log(array);

  answer = [...new Set(array)].sort((a, b) => a - b);

  return answer;
}
