function solution(i, j, k) {
    let answer = '';
    for(i; i <= j; i++){
        answer += i;
    }
    return answer.split(k).length-1;
}