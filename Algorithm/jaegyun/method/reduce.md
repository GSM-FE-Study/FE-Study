# reduce

## 1. 단순화된 형태

- 2개의 인자를 가짐

- acc(accumulator) 누산기, 최종 출력 값, 이해하기 쉽게 누적되는 값이라고 생각하면 편함

- cur(current) 현재 돌고 있는 요소 보통 cur이 돌면서 어떤식을 행하고 acc에 저장한다고 생각하면 편하다.

``` js
    const numbers = [4, 3, 2, 1];
    let sum = numbers.reduce((acc, cur) => {
        return acc + cur;
    });
```

- 위의 식은 cur이 numbers의 배열을 돌면서 acc에 저장해서 반환해준다.

## 2. 옵션 추가 형태

- 2개의 인자와 1개의 초기값을 가진다

- acc와 cur은 똑같고, initialValue(acc의 초기값)

``` js
    const numbers = [4, 3, 2, 1];
    let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
```

- 위 코드에서 accumulator + current 뒤에 ,0 이란게 추가가 됬는데

- 원래 초기값이 없으면 index 1로 고정 되어 acc에 가장 첫번째 요소가 저장 된 후에 될것이다. 즉, 초기값이 없으면 4가 저장 된 채로 시작한다.

- 하지만 초기값이 있으면 그 값으로 지정된다. 즉 위의 코드에서는 0으로 되어있으므로 처음에 acc에 0이 저장된채로 시작이 될 것이다.