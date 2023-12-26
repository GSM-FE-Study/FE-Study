function solution(my_string) {
    let sum = 0;
    const findNum = my_string.match(/\d+/g);

    if (findNum) {
        for(let i = 0; i < findNum.length; i++) {
            sum = sum + parseInt(findNum[i], 10);
        }
        return sum;
    } else {
        return 0; 
    }
}