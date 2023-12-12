# fill
- fill은 array의 요소들을 어떤 요소들로 fill할지 나타내는 메서드이다.

``` js
    const array = ["1", "2", "2", "3"];

    console.log(array.fill(0, 2, 4)); // 1, 2, 0, 0
    console.log(array.fill(0, 1)); // 1, 0, 0, 0
    console.log(array.fill(0)); // 0, 0, 0, 0
```

- 첫번째는 0으로, idx 2부터 idx 4까지
- 두번째는 idx 1부터 0으로
- 세번째는 0으로 변환해주는 것이다.