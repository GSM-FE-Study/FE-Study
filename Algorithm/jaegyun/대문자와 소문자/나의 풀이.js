function solution(my_string) {
    let splitedString = my_string.split('');

    splitedString.forEach((char, index) => {
        if (char === char.toUpperCase()) {
            splitedString[index] = char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            splitedString[index] = char.toUpperCase();
        }
    });

    return splitedString.join('');
}
