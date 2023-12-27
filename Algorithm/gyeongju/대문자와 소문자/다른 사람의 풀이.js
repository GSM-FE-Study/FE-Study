function solution(my_string) {
    let answer = '';
    let strArr = my_string.split('');
    for(let i of strArr) {
        answer += i == i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
    }
    return answer;
}