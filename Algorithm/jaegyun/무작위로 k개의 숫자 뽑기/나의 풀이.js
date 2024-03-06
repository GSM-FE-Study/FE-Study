function solution(arr, k) {
    let seen = new Set(); 
    let result = []; 

    for (let num of arr) {
        if (seen.has(num)) continue;

        result.push(num);
        seen.add(num);

        if (result.length === k) break;
    }

    while (result.length < k) {
        result.push(-1);
    }

    return result;
}
