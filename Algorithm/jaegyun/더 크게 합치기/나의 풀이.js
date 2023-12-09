function solution(a, b) {
    const a_plus_b = String(a) + String(b)
    const b_plus_a = String(b) + String(a)
    
    return a_plus_b >= b_plus_a ? Number(a_plus_b) : Number(b_plus_a)
}