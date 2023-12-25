function solution(s) {
    const splited = s.split(' ').map(Number);

    const maxNum = Math.max(...splited);
    const minNum = Math.min(...splited);

    return `${minNum} ${maxNum}`;
}