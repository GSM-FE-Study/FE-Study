## slice

slice 메서드는 배열이나 문자열에서 원하는 부분만 남게 할 수 있는 메서드이다

### 사용방법

```js
const num = [0, 1, 2, 3, 4];
const jangsin = "jangsin";

const sliceNum = num.slice(1, 3);
const sliceJangsin = jangsin.slice(4);

console.log(sliceNum); //[1, 2]
console.log(sliceJangsin); //sin
```

인자를 한개만 넣는 경우에는 index번호 뒤로 모두다 반환한다는 뜻이고<br>
인자를 두개를 넣는 경우에 첫번째 index번호 뒤부터 두번째 index번호 앞까지 반환한다는 뜻이다
