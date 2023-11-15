function solution(numbers) {
    var answer = 0;
    let number = numbers.sort((a, b) => a - b);

    let result = numbers[numbers.length - 1] * numbers[numbers.length - 2];

    return result;
}