function solution(tickets) {
  var answer = [];
  DFS(tickets, "ICN", ["ICN"]);
  // console.log(answer.sort());
  return answer.sort()[0];
  function DFS(t, start, str) {
    // console.log("DFS t,start,str : ["+t+"],["+start+"],["+str+"]")
    if (t.length == 0) {
      // console.log(str+"\n");
      answer.push(str);
    }
    for (var i in t) {
      if (t[i][0] == start) {
        let tmp = t.slice();
        tmp.splice(i, 1);
        let tmp2 = str.slice();
        tmp2.push(t[i][1]);
        DFS(tmp, t[i][1], tmp2);
      }
    }
  }
}
