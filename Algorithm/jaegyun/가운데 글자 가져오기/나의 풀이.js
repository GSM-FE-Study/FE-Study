function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 0) {
        const num1 = s.substring(s.length / 2 - 1, s.length / 2 + 1);
        answer = num1;
    } else {
        const num2 = s.slice(s.length / 2, s.length / 2 + 1);
        answer = num2;
    }
    
    return answer;
}