const solution = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
