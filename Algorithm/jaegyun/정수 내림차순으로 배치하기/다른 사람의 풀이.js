function solution(n) {
    const newN = n + "";
    const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

    return +newArr;
}