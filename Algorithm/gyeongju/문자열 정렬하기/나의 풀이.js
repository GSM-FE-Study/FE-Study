function solution(my_string) {
    let answer = [];
    for (let i of my_string) {
      if (i.char() < 58) answer.push(Number(i));
    }
    return answer.sort();
  }