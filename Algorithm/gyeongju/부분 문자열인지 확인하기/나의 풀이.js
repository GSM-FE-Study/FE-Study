function solution(my_string, target) {
    if (my_string.slice().includes(target)) {
        return 1;
    }
    return 0;
}