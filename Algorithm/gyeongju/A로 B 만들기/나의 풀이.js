function solution(before,after) {
    let answer = before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
    return answer;
}