function solution(n){
    let i = 1;
    let fac = 1;
    while (fac <= n){
        i += 1;
        fac *= i;
    }
    return i - 1;
}