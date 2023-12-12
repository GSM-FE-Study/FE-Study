function solution(before, after) {
    
    const sortedBefore = before.split('').sort().join('');
    const sortedAfter = after.split('').sort().join('');

    return sortedBefore === sortedAfter ? 1 : 0;
}