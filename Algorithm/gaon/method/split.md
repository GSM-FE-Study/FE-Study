## split

split은 문자열에서 특정 문자를 기준으로 나누어 배열로 반환하는 메서드이다

```js
const string = "apple banana";
const arr = string.split(" "); // 띄어쓰기를 기준으로 나눈다

console.log(arr); // ['apple', 'banana']
```

```js
const banana = "banana";
const arr = banana.split("n", 2); // 두번쨰 인자로는 숫자를 받는데 두번째 인자는 최대 인덱스 개수이다

console.log(arr); // ['ba', 'a']
```

> 두번쨰 인자로 아무것도 안주었다면 ['ba', 'a', 'a'] 으로 반환 되었겠지만 최대 인덱스 개수를 2로 설정해서 인덱스 2개만 남고 나머지는 버리게 된다
