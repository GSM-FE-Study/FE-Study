function solution(my_string) {
    let answer = ''
    for(let i = my_string.length; i >= 0; i--) {
        answer += my_string.charAt(i)
    }
    return answer
}