function solution(i, j, k) {
    let arr = [];
    for(let index = i; index <= j; index++) {
        arr.push(index);
    }
    const joinArr = arr.join('');
    
    const result = joinArr.match(new RegExp(k, 'g'));

    const count = result ? result.length : 0;
    
    return count;
}