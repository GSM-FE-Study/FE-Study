function solution(m, n, puddles) {
  var shortest = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  shortest[0][0] = 1;

  for (const [x, y] of puddles) {
    shortest[y - 1][x - 1] = -1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (shortest[i][j] === -1) continue;

      var top = 0;
      if (i - 1 >= 0 && shortest[i - 1][j] !== -1) {
        top = shortest[i - 1][j] % 1000000007;
      }
      var left = 0;
      if (j - 1 >= 0 && shortest[i][j - 1] !== -1) {
        left = shortest[i][j - 1] % 1000000007;
      }

      shortest[i][j] = top + left;
    }
  }

  return shortest[n - 1][m - 1] % 1000000007;
}
