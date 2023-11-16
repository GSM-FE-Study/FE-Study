# join

join의 기본형은 

``` js
    arr.join(separator);
```

이렇게 생겼습니다.

- 예를 하나 들어서 설명하자면 

``` js
    const hello = ["안녕하세요", "이름", "입니다", " 와"];

    console.log(hello.join());
    console.log(hello.join(''));
    console.log(hello.join('-'));

```

- 이렇게 되면 첫번째는 아무것도 없지만 생략이 된다면 쉼표로 구분되어 "안녕하세요, 이름, 입니다, 와"이렇게 되지만

- 두번째는 안녕하세요이름입니다와 이렇게 되고, 

- 세번째는 안녕하세요-이름-입니다-와 이렇게 됩니다.

