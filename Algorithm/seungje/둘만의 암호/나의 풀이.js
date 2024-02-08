function solution(s, skip, index) {
  let apb = "abcdefghijklmnopqrstuvwxyz";

  skip.split("").forEach((v) => (apb = apb.replace(v, "")));

  return s
    .split("")
    .map((v) => apb[(apb.indexOf(v) + index) % apb.length])
    .join("");
}
