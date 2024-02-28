function solution(routes) {
  var answer = 0;

  routes.sort((a, b) => a[0] - b[0]);
  let lastCamera = -30001;

  routes.forEach((route) => {
    const [enter, exit] = route;

    if (lastCamera < enter) {
      answer++;
      lastCamera = exit;
    } else if (lastCamera > exit) lastCamera = exit;
  });

  return answer;
}
