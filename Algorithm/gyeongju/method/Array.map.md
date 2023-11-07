# Array.map()

- **Array.map()** : 메소드는 위의 코드에서와 같이 특정 숫자를 곱하거나, 애플리케이션에 필요한 다른 작업을 수행하는 등 요소에 어떤 변경 사항을 적용하는 데 사용됩니다.

```js
    const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map(function(number) {
        return number * 2;
    });

console.log(doubledNumbers);  // 출력: [2, 4, 6, 8, 10]

```