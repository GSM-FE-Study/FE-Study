function solution(n) {
    let Str = n.toString().split("").map(Number)
    let answer = 0;

    for (let i = 0; i < Str.length; i++) {
        answer += Str[i]
    }

    return answer
}