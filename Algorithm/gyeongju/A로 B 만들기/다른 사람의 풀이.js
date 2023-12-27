function solution(before, after) {
    before = before.split('');
    after = after.split('');

    after.filter(v => {
        if (before.includes(v)) {
            before.splice(before.indexOf(v), 1);
            return true;
        } else {
            return false;
        }
    })

    return before.length === 0 ? 1 : 0;
}