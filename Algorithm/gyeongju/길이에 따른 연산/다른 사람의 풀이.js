function solution(n) {
    var answer = 0;

    if(n.length > 10){
        n.map((a)=>answer+=a)
    }
    else{
        answer += 1;
        n.map((a)=>answer*=a)
    }

    return answer;
}