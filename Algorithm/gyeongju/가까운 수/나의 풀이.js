function solution(array, n) {
    array.sort((a,b) => a - b);
    let arr = array.map((v) => Math.abs(v - n));
    let value = Math.min(...arr);
    let index = arr.indexOf(value);
    
    
    return array[index];
}