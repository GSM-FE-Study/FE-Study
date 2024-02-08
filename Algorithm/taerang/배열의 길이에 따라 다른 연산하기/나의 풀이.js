function solution(arr, n) {
  let answer = arr;
  console.log(answer);

  if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length; i += 2) {
      answer[i] = arr[i] + n;
      console.log(answer);
    }
  } else {
    for (let i = 1; i < arr.length; i += 2) {
      answer[i] = arr[i] + n;
    }
  }

  return answer;
}
