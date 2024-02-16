function solution(num_list) {
  let num = 0;

  num_list.reverse();
  console.log(num_list);

  if (num_list[0] > num_list[1]) {
    num = num_list[0] - num_list[1];
  } else {
    num = num_list[0] * 2;
  }

  num_list.reverse();
  num_list.push(num);

  return num_list;
}
