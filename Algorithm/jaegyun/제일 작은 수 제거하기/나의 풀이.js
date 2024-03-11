function solution(arr) {
    let answer = []
    
    arr.splice(arr.indexOf(Math.min(...arr)) , 1);
    if(arr.length <= 1) {
        answer = [-1]  
    } else {
        answer = arr
    }
    
    return answer
}