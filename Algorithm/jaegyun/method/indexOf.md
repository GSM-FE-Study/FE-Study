# indexOf

``` js
    const string = "안녕하세요 프론트엔드개발자에요.";

    console.log(string.indexOf("요"));
    console.log(string.indexOf("요", 10));
    
    console.log(string.lastIndexOf("요"));
    console.log(string.lastIndexOf("요", 10));

    console.log(string.lastIndexOf("다"));
```
- string.indexOf는 배열이나 문자열의 위치를 반환해주고 찾지못한다면 -1을 반환해줍니다.

- 첫번째는 요의 위치를 왼쪽부터 -> 이 방향으로 찾아서 4를 반환해줍니다.

- 두번째는 index 10을 시작으로 요를 찾으라는 뜻이기 때문에 두번째 요의 위치인 15를 반환해줍니다.

- 세번째와 네번째는 lastIndexOf로, indexOf와 성질은 비슷하지만 방향이 <- 이런식으로 흘러간다.

- 즉, 세번째는 오른쪽부터 왼쪽으로 찾아, 세번째는 15 네번째는 4를 반환해준다.

- 마지막 다섯번째는 없기때문에 -1을 반환해준다.