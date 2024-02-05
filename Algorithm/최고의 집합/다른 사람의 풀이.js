const bestSet = (n, s) =>
  n > s
    ? [-1]
    : Array.apply(null, Array(n)).map((_, i) =>
        i < n - (s % n) ? parseInt(s / n) : parseInt(s / n) + 1
      );
