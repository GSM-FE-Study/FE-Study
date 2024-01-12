const next_permutation = (arr) => {
  const N = arr.length;
  let i = N - 1;
  while (i > 0 && arr[i - 1] >= arr[i]) i--;
  if (i === 0) return false;
  let j = N - 1;
  while (arr[i - 1] >= arr[j]) j--;
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  let k = N - 1;
  while (i < k) {
    [arr[i], arr[k]] = [arr[k], arr[i]];
    i++;
    k--;
  }
  return true;
};
const getPermutation = (arr) => {
  const result = [];
  const origin = [...arr].sort((a, b) => a - b);
  const N = origin.length;
  do {
    result.push([...origin]);
  } while (next_permutation(origin));
  return result;
};
const getCombination = (arr, R) => {
  const result = [];
  const origin = [...arr];
  const N = arr.length;
  const temp = [...Array(N - R).fill(0), ...Array(R).fill(1)];
  do {
    const ans = [];
    for (let i = 0; i < N; i++) if (temp[i] === 1) ans.push(origin[i]);
    result.push(ans);
  } while (next_permutation(temp));
  return result;
};
const solution = (number) => {
  let answer = 0;
  const combinations = getCombination(number, 3);
  for (const [a, b, c] of combinations) if (a + b + c === 0) answer++;
  return answer;
};

//레전드 코드;;
