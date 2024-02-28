function solution(routes) {
  var answer = [];
  routes.sort((a, b) => a[1] - b[1]);
  for (let item of routes) {
    if (!checkCam(item, answer)) {
      answer.push(item[1]);
    }
  }

  return answer.length;
}

function checkCam(route, cameras) {
  for (let cam of cameras) {
    if (route[0] <= cam && cam <= route[1]) {
      return true;
    }
  }
  return false;
}
