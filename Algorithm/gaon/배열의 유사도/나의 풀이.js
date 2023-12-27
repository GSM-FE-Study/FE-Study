function solution(s1, s2) {
  let answer = 0;
  s1.forEach((str1) => {
    s2.forEach((str2) => {
      if (str1 === str2) answer += 1;
    });
  });

  return answer;
}
