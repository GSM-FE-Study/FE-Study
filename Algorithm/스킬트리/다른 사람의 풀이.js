function solution(skill, skill_trees) {
    function isCorrect(n) {
        // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
        let test = skill.split('');
        for (var i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}