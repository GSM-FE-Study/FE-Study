function solution(array) {
    var answer = [];
    let findMax = Math.max(...array);
    let findIdx = array.findIndex(x => x === findMax);
    answer.push(findMax , findIdx)
    return answer;
}