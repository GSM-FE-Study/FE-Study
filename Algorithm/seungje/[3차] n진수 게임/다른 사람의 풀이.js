function solution(n, t, m, p) {
  var tubeT = Array.apply(null, Array(t)).map((a, i) => i * m + p - 1);
  var line = "";
  var max = m * t + p;
  for (var i = 0; line.length <= max; i++) {
    line += i.toString(n);
  }
  return tubeT
    .map((a) => line[a])
    .join("")
    .toUpperCase();
}
