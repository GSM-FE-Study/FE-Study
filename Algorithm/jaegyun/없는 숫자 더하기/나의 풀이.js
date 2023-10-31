function solution(numbers) {
    var answer = -1;
    
    const num = 45;
    
    let sum = 0;
    
    for(let i = 0; numbers.length > i; i++) {
        sum += numbers[i];
    }
    
    answer = num - sum;
    
    return answer;
}