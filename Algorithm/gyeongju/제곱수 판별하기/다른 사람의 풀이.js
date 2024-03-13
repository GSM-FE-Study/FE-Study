function solution(n) {
    for (let i = 0; i < n/2; i++) {
        if (i*i == n) {
            return 1;
        }
    }
    return 2;
}