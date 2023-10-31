function solution(phone_number) {
    var answer = '';
    
    const backNum = phone_number.substr(-4, 4);
    
    const frontNum = phone_number.substring(0, phone_number.length - backNum.length);
    
    const replaceNum = frontNum.replace(/[0-9]/g, '*');
    
    answer = replaceNum + backNum;
    
    return answer;
}