let arr;
let visitArr;

function solution(n, computers) {
  let ctr = 0;
  arr = computers;
  visitArr = new Array(n).fill(false);

  for (let i in arr) {
    ctr += dfs(i);
  }

  return ctr;
}

function dfs(i) {
  if (visitArr[i] == true) return 0;
  else visitArr[i] = true;

  for (let j in arr[i]) {
    if (arr[i][j] == 1) dfs(j);
  }

  return 1;
}
