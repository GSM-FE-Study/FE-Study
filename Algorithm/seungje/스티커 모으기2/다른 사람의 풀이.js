function solution(sticker) {
  var answer = 0;
  var dp1 = [];
  var dp2 = [];
  var len = sticker.length;

  if (len < 3) {
    return Math.max.apply(null, sticker);
  }

  //sticker 1 select
  dp1[0] = sticker[0];
  dp1[1] = dp1[0];
  for (var i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }
  //sticker 2 select
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (var i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
