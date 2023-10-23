function solution(arr1, arr2) {
  let answer = 0;
  let cnt = 0,
    cnt2 = 0;
  if (arr1.length != arr2.length) {
    if (arr1.length > arr2.length) {
      answer = 1;
    } else {
      answer = -1;
    }
  } else {
    for (let i = 0; i < arr1.length; i++) {
      cnt += arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
      cnt2 += arr2[i];
    }

    if (cnt > cnt2) {
      answer = 1;
    } else if (cnt < cnt2) {
      answer = -1;
    } else {
      answer = 0;
    }
  }
  return answer;
}
