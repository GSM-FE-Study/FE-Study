function tiling(n) {
  var mb = Math.floor(n / 2);
  var dp = [];
  var result = 1;
  dp[1] = [];
  for (var k = 1; k <= n; k++) {
    dp[1][k] = k - 1;
  }
  for (var i = 2; i <= mb; i++) {
    dp[i] = [];
    for (var j = 1; j <= n; j++) {
      if (j / i < 2) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j - 2]) % 100000;
      }
      if (j === n) {
        result += dp[i][j];
      }
    }
  }
  result += dp[1][n];
  return result % 100000;
}
