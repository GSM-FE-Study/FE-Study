# arr.reduce 

**reduce()** 함수 여러게의 데이터를 대상으로 누적 집계를 내기 위해 사용되는 함수이다.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum); // 출력: 15
```
