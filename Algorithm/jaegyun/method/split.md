# split

- split 함수는 문자열을 seperator로 잘라서 limit크기 이하의 배열에 잘라진 문자열을 저장하여 리턴 합니다.

기본틀은

``` js
    string.split(separator, limit);
```

이렇게 생겼습니다.

- split을 쉽게 설명 하자면 파라미터가 없을 경우 즉, separator에 아무 입력이 없을 경우에는 string을 length 1인 배열에 담아 return합니다.

- 또, 파라미터로 전달을 한다면 전달된 값에 따라서 나뉘어 지고 리턴합니다.

- 만약 length가 0인 문자열 ""을 전달한다면 한글자씩 공백을 포함하여 리턴합니다.

- limit값 지정은 예시를 들자면

``` js
    const name = "안녕하세요, 김재균, 입니다, 와";

    const split_name = name.split(",", 2);

    console.log(split_name.length);
    console.log(split_name[0]);
    console.log(split_name[1]);
    console.log(split_name[2]);
    console.log(split_name[3]);
```

- 이렇게 limit을 2로 지정해준다면 2까지밖에 자르지 못해서 length는 2가 되고, 첫번째 console.log는 2가 출력이 됩니다.

- 그러므로 split_name[0]과 1은 안녕하세요와 김재균이 출력이 되지만, 2와 3은 undifined가 출력이 됩니다.