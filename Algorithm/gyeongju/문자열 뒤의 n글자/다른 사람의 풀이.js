function solution(my_string, n) {
    var answer = '';
    let m = n * -1
    let str = [];
    str.push(...my_string)
    answer = str.splice(m, n)
    answer = answer.join().replaceAll(',','')
    return answer;
}