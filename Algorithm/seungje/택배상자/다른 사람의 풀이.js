function solution(order) {
  let total = 0;
  let box = 1;
  const stack = [];
  while (true) {
    if (order.length === total) break;
    // 현재 박스 번호가 실어져야 할때
    if (order[total] === box) {
      total++;
      box++;
    } else if (stack[stack.length - 1] === order[total]) {
      stack.pop();
      total++;
    } else if (stack[stack.length - 1] !== order[total]) {
      if (order[total] < stack[stack.length - 1]) {
        break;
      }
      stack.push(box);
      box++;
    }
  }

  return total;
}
