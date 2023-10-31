function solution(order) {
    var answer = 0;
    
    const result = order.toString().match(/[369]/g);
    
    if(result === null) {
        answer = 0;
    } else {
        answer = result.length;
    }
    
    return answer;
}