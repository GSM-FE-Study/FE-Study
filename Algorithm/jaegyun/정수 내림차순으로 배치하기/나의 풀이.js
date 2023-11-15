function solution(n) {
    let answer = n + "";
    
    let realAnswer = answer.split('');
    
    let sortAnswer = realAnswer.sort((a, b) => b - a);
    
    let joinAnswer = sortAnswer.join('');
    
    return parseInt(joinAnswer);
}