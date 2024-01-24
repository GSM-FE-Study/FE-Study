function solution(begin, target, words) {
  const queue = [begin];
  const visitArr = new Array(words.length).fill(false);
  let ctr = 0;
  let shiftedWord = begin;
  let queueLeng = 1;

  while (queue.length > 0) {
    shiftedWord = queue.shift();
    queueLeng--;

    for (let i in words) {
      if (check(shiftedWord, words[i])) {
        if (visitArr[i] == true) continue;

        if (words[i] == target) return ctr + 1;

        visitArr[i] = true;
        queue.push(words[i]);
      }
    }

    if (queueLeng == 0) {
      ctr++;
      queueLeng = queue.length;
    }
  }
  return 0;

  function check(standard, word) {
    let diffCtr = 0;

    if (standard.length != word.length) return false;

    for (let i = 0; i < standard.length; i++) {
      if (standard.charAt(i) != word.charAt(i)) diffCtr++;
      if (diffCtr > 1) return false;
    }
    return true;
  }
}
