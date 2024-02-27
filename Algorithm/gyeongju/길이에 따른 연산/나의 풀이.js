function solution(num_list) {
    if(num_list.length >= 11){
        let answer = 0;
        for(let i = 0; i<num_list.length; i++){
            answer += num_list[i];
        }
        return answer;
    }else{
        let answer = 1;
        for(let i = 0; i<num_list.length; i++){
            answer *= num_list[i];
        }
        return answer;
    }
}