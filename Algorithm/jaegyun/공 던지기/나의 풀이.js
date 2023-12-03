function solution(numbers, k) {
    let length = 1
    
    for(let i = 0 ; i < k - 1 ; i ++) {
        length += 2
        if(length > numbers.length) {
            length -= numbers.length
        }
    }
    return length;
}