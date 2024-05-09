function solution(my_string) {
    const arr = my_string.replace(/[A-z]/g, "").split("");
    return arr.reduce((a, c) => a + Number(c), 0);
}