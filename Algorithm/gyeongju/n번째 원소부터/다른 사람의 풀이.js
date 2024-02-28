function solution(num_list, n) {
    const result = num_list.filter((_, i) => i >= n - 1);
    return result;
  }