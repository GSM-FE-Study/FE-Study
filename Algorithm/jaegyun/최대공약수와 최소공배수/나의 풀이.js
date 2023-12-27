function solution(n, m) {
    var answer = [];
    const high = (a, b) => {  
        if (b === 0) return a   
        return high(b, a % b)  
    }
    const low = (a,b) => (a*b) / high(a,b)
    return [high(n,m), low(n,m)]
}