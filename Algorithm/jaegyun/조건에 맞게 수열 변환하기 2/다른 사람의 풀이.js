function solution(arr) {
    var answer = 0;
    let before = [-1];

    while(!arr.every((e,idx) => e == before[idx])) {
        before =[...arr];

        arr = arr.map(e => {
            if(e >= 50 & e % 2 == 0)
                return e / 2;
            if(e < 50 & e % 2 != 0)
                return e * 2 + 1;
            return e;
        })
        answer++;
    }
    return answer - 1;
}