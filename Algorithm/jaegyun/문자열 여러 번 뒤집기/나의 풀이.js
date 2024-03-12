function solution(my_string, queries) {
    const splitedString = my_string.split('');
    queries.forEach(query => {
        const [start, end] = query;
        const subArray = splitedString.slice(start, end + 1);
        subArray.reverse();
        for (let i = start; i <= end; i++) {
            splitedString[i] = subArray[i - start];
        }
    });
    return splitedString.join('');
}