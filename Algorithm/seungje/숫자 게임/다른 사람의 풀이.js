function solution(A, B) {
  var point = 0;
  A = A.sort(function (a, b) {
    return a - b;
  });
  B = B.sort(function (a, b) {
    return a - b;
  });
  var temp = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = temp; j < B.length; j++) {
      // console.log("a-"+i+"/b"+j);
      if (A[i] < B[j]) {
        point++;
        //B.splice(j,1);
        temp = j + 1;
        break;
      }
    }
  }

  return point;
}
