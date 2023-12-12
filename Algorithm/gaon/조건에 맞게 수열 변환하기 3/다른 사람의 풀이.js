const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));
