function solution(array, n) {
    let result;
    
    array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));

    result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i] - n) === Math.abs(result - n) && array[i] < result) {
            result = array[i];
        } else {
            break; 
        }
    }

    return result;
}