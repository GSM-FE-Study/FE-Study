function solution(s) {
    const regex = /[a-zA-Z]/g;
    if(s.length === 4 || s.length === 6) {
        if(regex.test(s)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}