function solution(i, j, k) {
    let str = Array(j - i + 1).fill(i).map((v, i) => v + i).join('')
    return Array.from(str).filter(t => +t === k).length;
}