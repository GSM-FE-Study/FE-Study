function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    answer += repeat(Math.floor(food[i] / 2)).toString();
  }

  let result = answer + "0" + answer.split("").reverse().join("");

  return result;
}
