function solution(my_string, n) {
    let answer = '';
    
    for(let i = 0; i < n; i++){
        answer += my_string[i];
    }
    return answer;
}