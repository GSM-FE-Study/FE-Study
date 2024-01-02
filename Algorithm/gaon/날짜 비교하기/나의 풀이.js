function solution(date1, date2) {
  const dateOne = new Date(date1[0], date1[1], date1[2]);
  const dateTwo = new Date(date2[0], date2[1], date2[2]);

  if (dateOne < dateTwo) return 1;
  else return 0;
}
