function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let check = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        check = false;
        break;
      }
    }

    if (check) {
      answer += 1;
    }
  }

  return answer;

  //시간 초과 에러로 인하여 하여 해결.
  //아마 여러 중복 가능성이 있는 for문으로 인하여서 시간 초과 예상
}
