function solution(s1, s2) {
    let count = 0
    s1 = s1.sort()
    s2 = s2.sort()
    for(let i = 0; i < s2.length; i++) {
      if(s2.includes(s1[i])) {
        count ++
      }
    }
    return count
  }