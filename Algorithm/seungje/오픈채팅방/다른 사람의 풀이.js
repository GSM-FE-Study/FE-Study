function solution(record) {
  var nick = {},
    a = record.map((v) => v.split(" "));
  a.slice()
    .reverse()
    .forEach((v) => {
      if (v[2] && !nick[v[1]]) {
        nick[v[1]] = v[2];
      }
    });
  return a
    .filter((v) => {
      return v[0] !== "Change";
    })
    .map((v) => {
      return v[0] === "Enter"
        ? nick[v[1]] + "님이 들어왔습니다."
        : nick[v[1]] + "님이 나갔습니다.";
    });
}
