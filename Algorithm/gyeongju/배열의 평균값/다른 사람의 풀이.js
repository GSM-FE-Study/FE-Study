function solution(numbers) {
    var answer = 0;

    answer = numbers.reduce((a, b) => a + b, 0)
    answer = answer / numbers.length

    return answer;
}