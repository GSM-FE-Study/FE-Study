function solution(a, b) {
    var answer = 0;
    let plus = Number(String(a) + String(b));
    if (2 * a * b > plus) {
        answer += 2 * a * b;
    } else if (plus >= 2 * a * b) {
        answer += plus;
    }
    return answer;
}