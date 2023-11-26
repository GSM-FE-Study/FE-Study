function solution(my_str, n) {
    let newArr = [];
    for (let i = 0; i < my_str.length; i+= n) {
        newArr.push(my_str.slice(i, i + n));
    }
    return newArr;
}