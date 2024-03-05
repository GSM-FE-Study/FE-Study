function solution(arr) {
    let iterations = 0;

    while (true) {
        let isEqual = true; 

        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];

            if (num >= 50 && num % 2 === 0) {
                arr[i] = num / 2;
            } else if (num < 50 && num % 2 !== 0) {
                arr[i] = num * 2 + 1;
            }

            if (arr[i] !== num) {
                isEqual = false;
            }
        }

        iterations++; 

        if (isEqual) {
            break;
        }
    }

    return iterations - 1;
}