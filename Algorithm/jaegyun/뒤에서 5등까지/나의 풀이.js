function solution(num_list) {
    let answer = [];
    
    for(let i = 0; i < 5; i ++) {
        const minValue = Math.min(...num_list);
        answer.push(minValue);

        const findIndex = num_list.indexOf(minValue);
        num_list.splice(findIndex, 1);   
    }
    
    return answer;
}