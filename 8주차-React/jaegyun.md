useRef란?

React를 사용하는 프로젝트에서 가끔 DOM을 선택해야 하는 상황이 온다.

ex) 엘리먼트의 크기, 스크롤바의 위치, 혹은 포커스

React는 useRef로 DOM 노드, 엘리먼트, 컴포넌트 주소값을 참조할 수 있다.

활용 가능한 상황으로는 media playback, focus등이 있겠다.

이제 이것을 활용해서 Gsap을 사용해보았다.

Gsap은 애니메이션을 구현하기 쉽게 해주는 라이브러리이다.

[https://gsap.com/](https://gsap.com/)

 [Homepage | GSAP

GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser.

gsap.com](https://gsap.com/)

자세한건 공식 홈페이지로 가서 보면 된다.

일단 난 useRef를 이용해서 코드를 짰는데, ``
  

```
import { gsap } from "gsap";``
import { useRef, useEffect } from "react";

function App() {
  const app = useRef()
  
  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });
    tl.from(app.current, {
      y: 0,
      duration: 1.2, 
      ease: "bounce.out", 
    });
    tl.to(app.current, {
      y: 0,
      rotation: 360, 
      duration: 1.2,
      scale: 3, 
      ease: "bounce.out",
    });
    tl.to(app.current, {
      scale: 1,
    })
  }, []);

  return (
    <div style={{display: 'flex', width: '100%', height: '100%', alignContent: "center", justifyContent: 'center'}}>
      <div ref={app} style={{marginTop: '20rem'}}>
        <div>김재균 잘생겼다.</div>
      </div>
    </div>
  );
}

export default App;
```

여기서 useRef를 왜 이용하냐면

Gsap을 사용할 때, 특히 애니메이션의 대상이 되는 DOM 요소를 지정하려면 해당 요소에 대한 참조를 가져와야 합니다.

이때 useRef가 유용합니다.

그래서 부모 태그에 ref를 추가해줘서 결국에는 김재균 잘생겼다가 애니메이션이 적용이 된다.

<iframe src="https://play-tv.kakao.com/embed/player/cliplink/443284979?service=daum_tistory" width="860" height="516" frameborder="0" allowfullscreen="true"></iframe>