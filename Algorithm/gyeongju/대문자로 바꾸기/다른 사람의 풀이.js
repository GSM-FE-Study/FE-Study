function solution(myString) {
    var answer = '';
    for (let i=0; i<myString.length; i++) {
        let char = myString.charAt(i);
        if (char === char.toLowerCase()) {
            answer += char.toUpperCase()
        } else {
            answer += char;
        }
    }



    return answer;
}