function solution(my_string) {
    return my_string.split("").filter((v)=> !isNaN(v)).reduce((a,b) => parseInt(a)+parseInt(b));
}