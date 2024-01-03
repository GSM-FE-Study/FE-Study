function solution(s1, s2) {
    let answer = s1.filter(x => s2.includes(x));

    if (answer.length > 0) {
        return answer.length;
    } else {
        return 0;
    }
}