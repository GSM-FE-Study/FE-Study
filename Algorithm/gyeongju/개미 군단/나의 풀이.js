function solution(hp) {
    let 장군 = Math.floor(hp / 5)
    let 장병 = Math.floor((hp - 장군 * 5) / 3)
    let 일개미 = hp - (장군 * 5) - (장병 * 3)
    
    return (장군 + 장병 + 일개미)
}