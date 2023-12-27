function solution(arr) {
    const startIndex = arr.indexOf(2)
    const endIndex = arr.lastIndexOf(2)
    const array = [-1];
    
    if(startIndex < 0 && endIndex < 0) {
        return array;
    } else {
        return arr.slice(startIndex, endIndex + 1);
    }
}