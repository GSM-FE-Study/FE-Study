# reverse

- reverse 함수는 말 그대로 뒤집어 줍니다.

``` js
    const name = ['입니다.', '이름', '안녕하세요'];
    const reverseName = name.reverse();
    console.log(reverseName);
```

- 이렇게 코드작성을 하면 name의 값이 앞과 뒤가 바뀐 ['안녕하세요.', '이름', '입니다']가 나옵니다.

- 단순하게 앞과 뒤만 바뀌지만 첫번째와 세번째만 바뀌는것이 아닌, 만약 배열이 ['1', '2', '3', '4', '5']가 있다면

- ['5', '4', '3', '2', '1'] 이렇게 바뀝니다.