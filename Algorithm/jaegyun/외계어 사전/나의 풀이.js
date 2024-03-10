function solution(spell, dic) {
    const sortedSpell = spell.slice().sort().join('');
    
    const mapping = dic.map(word => word.split('').sort().join(''));

    const isIncluded = mapping.some(word => sortedSpell === word);
    
    if(isIncluded === false) {
        return 2;
    } else {
        return 1;
    }
}