function solution(slice, n) {
    return n%slice ? parseInt(n/slice)+1 : n/slice
}