function solution(topping) {
  const a = new Set();
  const b = {};

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++;
    } else {
      b[topping[i]] = 1;
      check++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    a.add(topping[i]);
    b[topping[i]]--;

    if (!b[topping[i]]) check--;
    if (a.size === check) answer++;
  }

  return answer;
}
