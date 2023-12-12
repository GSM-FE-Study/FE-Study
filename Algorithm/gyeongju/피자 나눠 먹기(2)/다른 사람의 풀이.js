function solution(n) {
    let count = 1;
    while (!Number.isInteger(count*6/n)) count++;
    return count;
}