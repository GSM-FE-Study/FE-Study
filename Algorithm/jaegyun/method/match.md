# match

- match 함수는 특정 텍스트 안에 검색할 단어, 찾고싶은 단어가 있는 경우 해당 텍스트가 문구에 포함되어 있는지 확인할 수 있습니다. 
- 또한 단어뿐만 아니라 정규표현식을 사용하여 특정 패턴을 검색하는 것 역시 가능합니다.

``` js
str.match(regexp)
```

``` js
const example  = 'love you. love me. love everything!'
const regExp = /love/gi;

exampleArray = example.match(regExp);
```

- 이렇게 하면 정규표현식을 이용하여 example에 있는 모든 love를 찾아 배열로 반환해줍니다.