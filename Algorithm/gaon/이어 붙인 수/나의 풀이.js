function solution(num_list) {
  const odd = JSON.stringify(num_list.filter((i) => i % 2 === 0)).replace(
    /\[|\]|,/g,
    ""
  );
  const even = JSON.stringify(num_list.filter((i) => i % 2 !== 0)).replace(
    /\[|\]|,/g,
    ""
  );

  return Number(odd) + Number(even);
}
