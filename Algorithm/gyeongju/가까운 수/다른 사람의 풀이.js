function solution(array, n) {
    array.sort((a,b)=>a-b);
    let diff = Infinity;
    let ind = Infinity;
    for (let i in array) {
        let calc = Math.abs(n-array[i]);
        if (calc < diff) {
            diff = calc;
            ind = i;
        }
    }
    return array[ind];
}