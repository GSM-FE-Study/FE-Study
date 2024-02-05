function solution(arg) {
  var list = [];
  arg.forEach((t) => {
    if (t[0] === "I") {
      list.push(+t.split(" ")[1]);
    } else {
      if (!list.length) return;

      var val = (t[2] === "-" ? Math.min : Math.max)(...list);
      var delIndex = list.findIndex((t) => t === val);

      list.splice(delIndex, 1);
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}
