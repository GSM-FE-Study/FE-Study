## Server Component란 무엇일까?

Server Side Rendering이라는 개념을 아는가? (모른다면 아래 게시글 참고)

[SSR 개념 바로잡기! Server Side Rendering!!](https://frorong.tistory.com/entry/SSR-%EA%B0%9C%EB%85%90-%EB%B0%94%EB%A1%9C%EC%9E%A1%EA%B8%B0-Server-Side-Rendering)

나는 얼마 전까진 서버컴포넌트와 서버사이드렌더링의 개념을 혼동하고 있었다.

**서버 컴포넌트**는 React 18부터 도입된 개념이다.  
서버에서 동작하는 컴포넌트를 의미하며, 이전에 사용하던 컴포넌트는 **클라이언트 컴포넌트**로 불린다. 서버 컴포넌트는 컴포넌트가 서버에서 해석된 이후 클라이언트로 전달된다. 클라이언트 컴포넌트는 클라이언트로 js 번들이 전달된 이후에 컴포넌트가 해석된다.

### Server Component의 장점

```ts
const Example = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    const newState = useGetServerData();
    setState(newState);
  }, []);

  return <div>{state}</div>;
};
```

우리가 보통 컴포넌트를 작성할 때에 이렇게 작성을 할 것이다.
div가 렌더링 된 이후 새로운 state가 받아와 지므로 div는 리렌더링 된다.
이 과정이 끝나기 전까지 자식 컴포넌트의 렌더링이 지연되며, 불필요한 렌더링이 발생한다.

서버 컴포넌트는 서버에서 렌더링되기 때문에 불필요한 렌더링과 API 요청이 사라진다.

```ts
const Example = async () => {
  const data = await fetch(`url`).json();

  if (data == null) {
    return <div>데이터가 존재하지 않습니다.</div>;
  } else {
    return <div>{data}</data>
  }
}
```

서버 컴포넌트는 서버에서 동작하는 특성을 가지고 있기 때문에 서버 리소스에 자유롭게 접근할 수 있다는 장점이 있다.
또한 컴포넌트가 서버에서 렌더링 된 후 클라이언트로 전달되기 때문에 클라이언트에서 취급하는 번들의 용량이 감소한다.

### SSR과의 차이??

SSR과 RSC는 겉보기에는 비슷하나 실제로는 다른 개념이다.  
SSR에서 컴포넌트의 코드는 JS 번들에 포함되어 클라이언트로 전달되지만, RSC에서는 전달되지 않는다.
또한 SSR은 최상단에서만 서버에 접근할 수 있지만, RSC는 페이지 레벨에 상관없이 서버에 접근할 수 있다. RSC는 클라이언트 상태를 유지하며 refetch 할 수 있지만, SSR은 서버에서 HTML로 전달되어 렌더링 하기 때문에 refetch시 HTML 전체를 리렌더링 해야 한다.

SSR과 RSC를 적절하게 사용하면 효과적인 시너지를 낼 수 있다.

### Next에서의 RSC

Next는 기본적으로 SSR과 CSR을 혼합하여 지원한다.

Next에서 RSC를 사용하기 위해선 App Router를 사용해야 한다. App Router에서는 기본적으로 모든 컴포넌트가 RSC이다.

기존에 Next에서 서버에 접근하기 위해서는 getServerSideProps나 getStaticProps를 사용해야 했다. RSC는 컴포넌트 내부에서 data fetch가 가능하기 때문에 위와 같은 메서드를 사용하지 않아도 된다.

### CSS in JS

서버컴포넌트는 emotion이나 styled-component와 같은 css-in-js 라이브러리를 사용할 수 없다. 이는 스타일 처리에 대한 런타임이 필요하기 때문이다. [→ 관련 문서](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)

서버컴포넌트에서 css-in-js 라이브러리를 사용하기 위해선 라이브러리 제작자가 최신 버전의 react를 지원해야 한다.

아래에서는 위 내용과 관련하여 우리 팀이 겪은 문제를 소개하려 한다.

우리 팀은 App Router에서 css-in-js 라이브러리 중 하나인 emotion을 사용하여 스타일링하려 했다. 하지만 위 내용과 같은 문제에 부딪혔고 이를 해결하기 위해 아래의 과정을 겪었다.

**문제 개선 과정**

1.  **app directory 내부, 최상위에 ‘use client’ 선언**  
    처음에는 서버 컴포넌트에 대해 제대로 이해하지 못하고 눈에 보이는 오류를 잡기 위해 'use client'를 어플리케이션 최상위에 선언했다.
    최상위에 'use client'를 선언함으로써 하위 컴포넌트들에는 선언할 필요가 없었지만 해당 방법은 큰 문제를 야기했다.
    Next의 metadata API는 서버컴포넌트에서만 사용 가능했기 때문에 해당 API를 사용할 수 없었다.
2.  **각 컴포넌트에 ‘use client’ 선언**  
    이후 App Router를 제외한 각 컴포넌트에 'use client'를 선언하여 최상위 페이지에서는 Next의 metadata API를 사용할 수 있도록 했다.
    이 변경으로 SEO는 개선되었지만, App Router의 강점 중 하나인 서버컴포넌트를 활용하지 못했다.
3.  **sass나 tailwind css로 style code 마이그레이션**  
    서버컴포넌트는 종속성 유지를 서버 측에서 부담하기 때문에 클라이언트 측에서 다운로드해야 하는 js 번들의 크기가 크게 줄어드는 장점이 있다.
    이를 위해 기존에 emotion을 사용하여 작성된 스타일 코드를 tailwind css나 sass로 마이그레이션 하여 구조를 재설계할 계획을 가지고 있었다.
4.  **2번 방식 유지**  
    이 사안은 중요하지만 급하지는 않았다. 때문에 오랫동안 고민할 시간이 충분했다.
    현업자 분들께 자문도 구해보고, 팀 내에서도 많은 고민을 했다.
    최종적으로 컴포넌트 기반 스타일링의 이점을 놓치고 싶지 않았고, 스타일 코드를 마이그레이션 하는 것이 많은 리소스 소모를 야기할 것이라는 판단을 했다.
    또한 Every GSM은 **정적 어플리케이션**으로, 종속성 부담을 줄이는 것 말고는 서버 컴포넌트에서 큰 장점을 느끼지 못했다. 따라서 저희 팀은 현재까지 2번 방식을 채택 중이다.

[EveryGSM 교내 프로젝트를 하나로 연결해주는 서비스.](https://every.hellogsm.kr/)

## 마치며

우리 팀은 각 컴포넌트단에서 use client를 선언하여 기본을 RCC로 잡고, 필요한 경우에만 RSC를 사용하고 있다.
RSC는 충분한 장점이 있지만, 무조건 RSC를 사용할 필요는 없다. 항상 상황에 맞게 적절히 기술을 사용하는 것이 중요한 것 같다.

## Reference

[React 18: 리액트 서버 컴포넌트 준비하기 | 카카오페이 기술 블로그](https://tech.kakaopay.com/post/react-server-components/)
