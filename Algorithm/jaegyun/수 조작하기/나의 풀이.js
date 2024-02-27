function solution(n, control) {
    const splitedControl = control.split('');
    splitedControl.forEach((i) => {
        if(i === "w") {
            n++;
        } else if(i === "s") {
            n--;
        } else if(i === "d") {
            n = n + 10;
        } else if(i === "a") {
            n = n - 10;
        }
    })
    return n
}