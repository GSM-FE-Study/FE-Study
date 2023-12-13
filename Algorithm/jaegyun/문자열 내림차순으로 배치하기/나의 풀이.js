function solution(s) {
    const splitedS = s.split("").sort().reverse().join("");
    return splitedS;
}