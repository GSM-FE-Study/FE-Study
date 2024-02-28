function solution(q, r, code) {
    let arr = [];
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (i % q === r) {
            arr.push(element);
        }
    }
    return arr.join('');
}
