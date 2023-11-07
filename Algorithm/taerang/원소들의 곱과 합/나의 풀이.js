function solution(num_list) {
  let multiply = 1;
  let add = 0;

  for (let i = 0; i < num_list.length; i++) {
    multiply *= num_list[i];
    add += num_list[i];
  }

  let addSquare = Math.pow(add, 2);

  if (multiply < addSquare) {
    return 1;
  } else {
    return 0;
  }
}
