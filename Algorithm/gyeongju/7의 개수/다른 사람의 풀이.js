function solution(array) {

    let result = 0;

    array.map((item) => {
        while(item > 0) {
            if(item % 10 === 7) {
                result += 1;   
            }

            item = Math.floor(item/10);
        }
    });

    return result;
}