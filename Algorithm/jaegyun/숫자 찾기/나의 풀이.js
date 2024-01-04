function solution(num, k) {
    const str = String(num);
    const newArr = Array.from(str);
    
    if(newArr.indexOf(String(k)) === -1) {
        return -1;
    } else {
        return newArr.indexOf(String(k)) + 1;
    }
}