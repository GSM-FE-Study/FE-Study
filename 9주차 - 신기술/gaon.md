## proxy

valtio는 proxy 기반의 상태 관리 라이브러리이다

proxy를 사용해 상태를 관리한다

특징

- 손쉬운 API
- 컴포넌트에 사용되는 일부 상태를 자동으로 감지해서 업데이트 하는 방식
- 상태를 직접 변경하는 방식

### install

```jsx
npm i valtio
```

### proxy

proxy API를 사용하여 전역 상태를 만든다

```jsx
import { proxy } from "valtio";

export const store = proxy({ count: 0 });
```

다른 라이브러리들은 하나씩 상태를 만드는데 valtio는 하나의 객체 안에 모든 필요한 모든 상태를 만드는것 같다

![스크린샷 2024-01-02 오후 7.11.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3cca0628-f0cc-40a6-9949-2a17089acec8/13d61192-b9d8-4ec7-b241-223fd7f5f011/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.11.29.png)

공식문서에서도 하나의 객체 안에 여러 상태를 만든다

### **useSnapshot**

useSnapshot API를 사용하여 전역상태 값을 가져온다

```jsx
import { useSnapshot } from "valtio";
import { store } from "./proxy/count";

const snap = useSnapshot(store);
```

### action

valtio는 다른 라이브러리와 다르게 직접 값에 접근하여 값을 바꾼다

```jsx
store.count += 1;
```

valtio에서 직접 값에 접근하여 값을 변경하는 이유는 valtio에서 proxy를 통해 값을 변경함으로서 해당 변경을 감지하고 연결된 컴포넌트를 다시 렌더링할수 있고, 개발자에게 더 직관적이고 편리한 방법을 제공하기 위함이라고 한다

### 마무리

이렇게 valtio에 대해 알아보았는데 내가 이해하기에는 약간 어려운 내용인거 같다 다음에 기회가 된다면

js 프록시에 대해 공부해 valtio를 더욱 깊이 이해해 보고 싶다 그리고 사용방법도 다른 것들은 다른 상태관리라이브러리들과 비슷했는데 값을 변경하는 부분이 달라 신기했다
