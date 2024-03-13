function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    const ReducedA = A.reduce((sum, curr, i) => sum + curr * B[i], 0);

    return ReducedA
}