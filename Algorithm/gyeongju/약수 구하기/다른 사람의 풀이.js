function solution(n) {
    if (n === 1) return [1];
    let hf = Math.ceil(n / 2);
    let res = new Set([1]);
    for(let i = 2; i <= hf; i++) {
        if(n % i) continue;
        res.add(i);
    }

    if (res.size < 2) return [1, n]
    return [...res, n]
}