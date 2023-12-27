function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}