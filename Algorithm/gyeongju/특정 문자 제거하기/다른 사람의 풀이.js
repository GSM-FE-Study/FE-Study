function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}