function solution(my_string) {
    const arr = my_string.split('')
    const set = new Set()
    for (const i of arr) {
        set.add(i)
    }
    return [...set].join('')
}