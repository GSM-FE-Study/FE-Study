function solution(n) {
    let num = [];
    
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            num.push(i);
        }
    }
    
    return num;
}