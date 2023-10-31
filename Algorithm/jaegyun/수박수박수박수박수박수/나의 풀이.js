function solution(n) {
    var answer = '';
    
    const wtml = "수박";
    
    if(n % 2 === 0) {
        const repeatWtml = wtml.repeat(n / 2);
        answer = repeatWtml;
    } else {
        const repeatedWtml = wtml.repeat(n / 2) + wtml.substring(0, 1);
        answer = repeatedWtml;
    }
    
    return answer;
}