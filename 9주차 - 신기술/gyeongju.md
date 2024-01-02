CSS-in-JS는 JavaScript 안에서 CSS 스타일을 작성하고 관리하는 기술입니다. 이 기술은 기존의 CSS 파일이나 인라인 스타일 시트를 사용하는 대신 JavaScript 객체로 스타일을 정의합니다.

예를 들어, 다음과 같이 스타일을 작성할 수 있습니다.

```
const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
};

function MyButton() {
  return (
    <button style={buttonStyle}>Click Me</button>
  );
}

```

CSS-in-JS를 사용하면 스타일을 동적으로 조작하고 재사용할 수 있다. 이를 통해 CSS의 격리 문제를 해결할 수 있고, 코드의 가독성과 유지보수성을 향상시킬 수 있습니다.

CSS-in-JS는 여러 라이브러리와 프레임워크에서 제공되며, 대표적인 예로는 Styled Components, Emotion, CSS Modules 등이 있습니다.

[##_Image|kage@nmmPp/btsCTVN1jqU/FuQr5yhQ9efZVp1hpreKz0/img.png|CDM|1.3|{"originWidth":1528,"originHeight":700,"style":"alignCenter","width":539,"height":247,"filename":"스크린샷 2024-01-02 오전 11.10.58.png"}_##]

Emotion.js**은 JS 로 css 스타일을 작성하도록 설계된 라이브러리다.**

Emotion은 프레임워크에 구애 받지 않고 사용이 가능하며, React와 함께 사용할 수도 있다.

```
import { css } from '@emotion/css'

const color = 'white'

render(
 <div
   className={css`
     padding: 32px;
     background-color: hotpink;
     font-size: 24px;
     border-radius: 4px;
     &:hover {
       color: ${color};
     }
   `}>
   Hover to change color.
 </div>)
```

개인적으로 emotion.js가 더 편하다고 느낀 점은, jsx안에서 이게 어떤 태그인지 바로 알 수 있다는 점이다.

**장점**

Emotion은 간결하고 직관적인 문법을 제공하여 React 컴포넌트의 스타일링을 쉽게 관리할 수 있습니다.

Emotion에서는 테마(Theme)를 사용하여 전역적으로 스타일을 관리할 수 있습니다.

#### 결론

간단하고 효율적이며 복잡하지 않은 스타일링을 우해 크기가 작은 Emotion은 훌룡한 CSS-in-JS 라이브러리이다. 하지만 독특하고 복잡한 스타일 옵션의 경우 styled-components가 더 나은 방법이 될 수도 있다.