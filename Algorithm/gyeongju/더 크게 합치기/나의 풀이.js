function solution(a, b) {
    let answer = 0;
    let ab = Number(a.toString() + b.toString());
    let ba = Number(b.toString() + a.toString());

    if(ab > ba) {
        answer = ab;
    } else if(ab < ba) {
        answer = ba;
    } else if(ab === ba) {
        answer = ab;
    }

    return answer;
}