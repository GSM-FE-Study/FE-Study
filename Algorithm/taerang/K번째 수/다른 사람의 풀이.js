let solution = (_, $) =>
  $.map(([i, j, k]) => _.slice(i - 1, j).sort((_, $) => _ - $)[k - 1]);
