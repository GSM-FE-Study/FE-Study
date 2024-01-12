function solution(n)
{
    let sum = 0;
    let arr = String(n).split("").map(Number);
    
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
