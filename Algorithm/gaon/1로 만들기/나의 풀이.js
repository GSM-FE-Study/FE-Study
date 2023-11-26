function solution(num_list) {
  let answer = 0;
  let copy = [...num_list].forEach((n) => {
    while (n !== 1) {
      n % 2 === 1 && n--;
      n /= 2;
      answer++;
    }
  });

  return answer;
}
