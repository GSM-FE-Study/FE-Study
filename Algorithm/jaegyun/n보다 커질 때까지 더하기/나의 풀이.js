function solution(numbers, n) {
    let sum = 0;
    const answer = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
        if(sum > n) {
            return sum
        }
    }
}