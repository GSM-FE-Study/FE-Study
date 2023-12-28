function solution(s) {
    let splited = s.split(" ");

    for (let i = 0; i < splited.length; i++) {
        splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].slice(1).toLowerCase();
    }

    return splited.join(" ");
}