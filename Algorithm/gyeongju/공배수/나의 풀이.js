function solution(number, n, m) {
    if(number % n != 0) {
        return 0;
    }
    if(number % m == 0) {
        return 1;
    } else return 0;
}