function solution(s) {
    const splitedS = s.split(' ');
    const result = splitedS.map((word) => {
        let upgradedWord = '';
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                upgradedWord += word[j].toUpperCase();
            } else {
                upgradedWord += word[j].toLowerCase();
            }
        }
        return upgradedWord;
    });
    return result.join(' ');
}
