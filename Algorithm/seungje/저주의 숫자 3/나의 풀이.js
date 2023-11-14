function solution(n) {
  let arr = [];
  for (let i = 1; i <= 185; i++)
    if (!String(i).includes("3") && i % 3 !== 0) arr.push(i);
  return arr[n - 1];
}
