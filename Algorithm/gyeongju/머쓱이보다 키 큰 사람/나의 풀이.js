function solution(array, height) {
    let answer = array.filter((a)=>a>height)
    return answer.length;
}