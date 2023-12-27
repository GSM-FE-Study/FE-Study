## context란

### react에서 특정 값을 전역적(Global)으로 사용하고 싶을때 사용하는 기능이다.

## 언제 사용 될까?

- 전역적으로 사용 될때 - 한가지 값을 가지고 여러 군데에 사용되는 값 (ex. 다크 모드, 회원정보)
- Props drilling 방지

#### \*Props drilling?

####  Props drilling이란 Props를 계속 자식 컴포넌트에 전달해 사용하는것을 말한다

[##_Image|kage@bGAszR/btsCc3NZBaJ/mgsJSNoYwsQzlDOEgVpeWK/img.png|CDM|1.3|{"originWidth":1768,"originHeight":1012,"style":"alignCenter","filename":"스크린샷 2023-12-19 오후 7.43.24.png"}_##]

```
function App() {
  const [count, setCount] = useState(0);

  return <First count={count} />;
}

function First(props) {
  return (
    <div>
      <Second count={props.count} />
    </div>
  );
}

function Second(props) {
  return (
    <div>
      <Third count={props.count} />
    </div>
  );
}

function Third(props) {
  return (
    <div>
      <Fourth count={props.count} />
    </div>
  );
}

function Fourth(props) {
  return (
    <div>
      <Fifth count={props.count} />
    </div>
  );
}

function Fifth(props) {
  return <div>{props.count}</div>;
}
```

위의 코드를 보면 App 컴포넌트에 있는 count라는 state를 FIfth 컴포넌트에 전달 하려고 하면 이렇게 만은 중간 컴포넌트를 거쳐 props를 전달 해주어야 한다 만약 이보다 중간 컴포넌트가 더 많다면 props를 추적하기 힘들어지고 유지보수 하기도 어려워진다

## 기본 사용법

1\. context로 data를 공유하려면 일단 context를 만들어줘야 한다!!

```
import { createContext } from "react";

const Context = createContext(null);
```

createContext 함수로 context를 만들어 준다!

괄호 안에는 context의 기본값을 넣어준다

2\. root 컴포넌트를 감싸준다

```
function App() {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={count}>
      <First count={count} />
    </Context.Provider>
  );
}
```

전역적으로 사용하고자 하는 곳을 Provider로 감싸준다

value는 전역적으로 공유하고 싶은 값을 넣어 주면 된다 나의 경우는 count state를 전역적으로 공유하기 위해 value에 넣어 줬다!

만약 provider로 감싸지 않아 value에 값을 넣지 않는다면 처음 context를 만들때의 기본값을 공유한다!!

3\. 값 가져와 사용하기!!!!!!

```
import { useContext } from "react";

function First(props) {
  const count = useContext(ThemeContext);

  return (
    <div>
      {count}
    </div>
  );
}
```

자신이 만든 context를 useContext hook을 사용해 값을 가져와 사용한다!

밑에 링크는 내가 context를 사용해 theme을 변경하는 페이지이다

[https://context-practice-blond.vercel.app/](https://context-practice-blond.vercel.app/)
