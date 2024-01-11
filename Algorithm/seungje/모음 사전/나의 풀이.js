function solution(word) {
  const words = ["A", "E", "I", "O", "U"];
  let answer = 0;

  let idx = 0;

  dfs("", 0);

  function dfs(newWord, cnt) {
    if (cnt > 5) return;
    if (word == newWord) answer = idx;
    idx++;

    words.forEach((v) => dfs(newWord + v, cnt + 1));
  }

  return answer;
}
