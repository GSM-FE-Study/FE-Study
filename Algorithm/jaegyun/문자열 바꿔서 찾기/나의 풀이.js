function solution(myString, pat) {
    const splitedString = myString.split('');
    
    for(let i = 0; i < splitedString.length; i ++) {
        if(splitedString[i] === "A") {
            splitedString[i] = "B";
        } else if(splitedString[i] === "B") {
            splitedString[i] = "A";
        }
    }
    
    const joinedString = splitedString.join('');
    
    const pos = joinedString.includes(pat);
    
    if(pos === true) {
        return 1
    } else {
        return 0
    }
}