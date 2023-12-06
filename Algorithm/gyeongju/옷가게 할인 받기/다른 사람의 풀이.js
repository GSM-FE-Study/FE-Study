function solution(price) {
    var answer = price;
    if (answer >= 500000) {
        answer *= 0.8;
    } else if (answer >= 300000) {
        answer *= 0.9;
    } else if (answer >= 100000) {
        answer *= 0.95;
    }

    return parseInt(answer);
}