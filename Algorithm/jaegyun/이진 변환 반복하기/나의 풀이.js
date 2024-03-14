function solution(s) {
    let sum = 0;
    let cnt = 0;
    let answer = [];
    
    while(true) {
        const splitedS = s.split('')
        const filterd = splitedS.filter((e) => e > 0);

        sum = sum + s.length - filterd.length
        
        s = filterd.length.toString(2)
        
        cnt++;
        
        if(s.length === 1) {
            answer.push(cnt)
            answer.push(sum)
            break;
        }
    }
    
    return answer
}