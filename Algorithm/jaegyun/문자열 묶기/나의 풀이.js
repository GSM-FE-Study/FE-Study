function solution(strArr) {
    const counter = Array(31).fill(0) //30개의 array요소를 0으로 채움
    for (const str of strArr){
        counter[str.length]++ // 요소를 순회하면서 length의 개수를 counter에 ++함
    } // ex) str이 순회하면서 ab를 찾으면 length는 2이니, idx2의 원래요소값인 0을 ++시켜 1이 됨 
    return Math.max(...counter) // Math.max로 counter 깊은복사를 통해, counter에 있는 가장 큰 숫자를 반환
}