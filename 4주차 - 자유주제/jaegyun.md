React Hooks에 대해서 알아보자면 React 16.8버전에 새로 추가된 기능으로, 함수형 컴포넌트에 맞게 사용이 되어,

함수형 컴포넌트 에서만 사용이 가능합니다.

먼저 React Hook을 사용할때에도 규칙이란것이 있는데, 먼저

**1\. Hook을 최상위에서 작성**

early return이 실행되기 전에 항상 React 함수의 최상위(at the top level)에서 Hook을 호출해야 합니다.

이 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장됩니다.

**2\. React 함수 내에서만 작성**

Hook은 일반적인 js함수에서는 호출하면 안되고, **함수형 컴포넌트**나 **custom hook**에서는 가능합니다.

<img src="https://blog.kakaocdn.net/dn/5XvrN/btsAAOXxVej/STXPm8gXueyLv1r3f7FKIK/img.png">

### 1\. useState

### 2\. useEffect

### 3\. useMemo

### 4\. useCallback

### 1.useState

``` js
function App() {
  const [count ,setCount] = useState(0);

  const onClickIncrease = () => {
    setCount(count + 1);
  };

  const onClickDecreaset = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <button onClick={onClickIncrease}>증가</button>
      <button onClick ={onClickDecrease}>감소</button>
    </div>
  );
}
```

여기에서 useState 기본값으로 0을 주고, 증가나 감소 button을 누를시에 setCount로 count가 바뀌어서

count의 값이 바뀌어, 만약 count값을 출력했을때 바뀌어진 count가 출력이 됩니다.

### 2\. useEffect

-   컴포넌트가 페이지에 장착 : mount
-   컴포넌트 업데이트 : update
-   컴포넌트 제거 : unmount

이것이 일단 component의 lifecycle인데 useEffect를 배울때 알고 있으면 도움이 됩니다.

``` js
function Detail(){
    let [num, setNum] = useState('')

    useEffect(()=>{
	        if (isNaN(num) == true){
 	             alert('문자치지 마세요')
        }
     }, [num])

    return (
	        <input onChange((e)=>{ setNum(e.target.value) }) />
    )
}
```

이것을 봐보자면 input태그 안에 어떤문자를 치면 setNum안에 있는 e.target.value로 인해서 num이 수정이 될 것입니다.

그러면 바뀐 num에 의해서 useEffect가 실행이 될 것이고, 안에 있는 것이 실행 될 것입니다.

여기서 num은 디펜던시로 \[ \]안에 있는 요소입니다. 

디펜던시가 있을 시에는 디펜던시의 값이 바뀔 때에만 useEffect가 실행이 됩니다.

### 3\. useMemo

``` js
import React, { useState, useMemo } from 'react';

const ExampleComponent = ({ data }) => {
  const [count, setCount] = useState(0);

  const memoizedResult = useMemo(() => {
    console.log('Calculating result...');
    return data * count;
  }, [data, count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Result: {memoizedResult}</p>
    </div>
  );
};

export default ExampleComponent;
```

useMemo는 useEffect와 마찬가지로 디펜던시를 가지는데 디펜던시가 변경될 경우에만 실행이되고,

변경되지 않을경우에는 전에 있던 값을 기억해서 사용합니다.

useMemo의 장점은 계산 비용이 높은 경우나 렌더링 성능을 향상시키고자 할 때 유용합니다.

예를 들어서 그 전의 값을 기억하지 않은경우인데 무거운 일을 하는 컴포넌트를 계속 render시킨다면

굉장히 비효율 적일 것입니다.

하지만 useMemo는 그 전의 값을 메모리에서 꺼내와서 사용하는 것이기 때문에 불필요한데에 사용하지말고

꼭 필요한곳에만 사용해야합니다.

### 4\. useCallback

``` js
import React, { useCallback } from 'react';

const MyComponent = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick('Hello, World!');
  }, [onClick]);

  return <button onClick={handleClick}>Click me</button>;
};
```

useCallback은 useMemo와 비슷한 형태와 비슷한 기능들을 가집니다.

useCallback은 값이 아닌 주로 자식 컴포넌트에게 콜백 함수를 전달할 때 사용됩니다.

부모 컴포넌트가 렌더링될 때마다 함수가 새로 생성되는 것을 방지하고, 자식 컴포넌트는 최신의 콜백을 유지합니다.

useCallback과 useMemo를 헷갈려 할 수도 있는데 공통점과 차이점에 대해 봐보겠습니다.

먼저, 공통점은 useCallback, useMemo모두 메모제이션해서 메모리에서 꺼내어서 사용해, 둘 다 최적화에 사용합니다.

반대로 차이점은 useCallback은 함수를 메모제이션해서 렌더링에 최적화 하지만useMemo는 값을 메모제이션해서 계산에 최적화를 한다는 차이점이 존재합니다.