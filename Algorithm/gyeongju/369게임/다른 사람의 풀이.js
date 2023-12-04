function solution(order) {
    return Array.from(order.toString()).filter(t => ['3', '6', '9'].includes(t)).length;
}