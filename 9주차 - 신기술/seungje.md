**Vanilla Extract로 개발자 경험, 사용자 경험 모두 챙기자.**

emotion이나 styled-components와 같은 css-in-js 라이브러리들이 많은 인기가 상승 곡선을 그리고 있다. 이렇게 많은 인기를 얻고 있는 css-in-js 라이브러리는 무엇일까?

### css-in-js란?

css-in-js는 어플리케이션의 스타일을 js로 작성하여 적용하는 것을 의미한다.

동작 원리를 간략히 설명하면 다음과 같다.

1\. 개발자가 js로 스타일을 정의한다.

2\. 라이브러리가 각 스타일에 대한 고유한 class name을 생성한다.

3\. 생성된 스타일과 class name을 기반으로 style sheet를 생성한다.

4. <style>의 형태로 DOM에 주입한다.

이러한 css-in-js는 컴포넌트 기반 스타일링이 가능하고 스타일을 재사용할 수 있다는 장점을 가지고 있다. 또한 css에서 js의 문법을 사용할 수 있기 때문에 개발자의 생산성이 올라간다. 여기에 추가로 class name을 자동으로 생성하기 때문에 class name이 겹쳐서 생기는 문제도 고려하지 않아도 된다. 하지만 이런 css-in-js도 장점만 있는 것은 아니었다.

### 서버컴포넌트와 css-in-js

React 18에서부터 새롭게 등장한 서버컴포넌트라는 개념이 있다.

서버컴포넌트는 번들 용량 감소, 서버 접근 가능 등의 이점이 있는데 기존 css-in-js라이브러리는 런타임에 스타일을 생성하기 때문에 서버에서 동작하는 서버컴포넌트의 특성상 사용할 수 없다.

때문에 Next공식문서를 읽어보시면 서버컴포넌트에서 사용 가능한 tailwind나 css modules 사용을 추천하고있다. 하지만 tailwind는 특유의 사용 방법 때문에 꺼려하는 개발자분들이 많다.

css-in-js 라이브러리를 사용하면 개발자 경험은 챙길 수 있지만, 서버컴포넌트 사용자 경험적인 이점은 가져오기 힘들어진다.

이에 대한 자세한 설명은 아래 게시글에서 확인 가능하다.

[RSC 개념 바로잡기! RSC와 css in js. (React Server Component)

Server Component란 무엇일까? Server Side Rendering이라는 개념을 아는가? (모른다면 아래 게시글 참고) SSR 개념 바로잡기! Server Side Rendering!! Server Side Rendering이 무엇일까? server side rendering을 이해하기 위

frorong.tistory.com](https://frorong.tistory.com/entry/RSC-%EA%B0%9C%EB%85%90-%EB%B0%94%EB%A1%9C%EC%9E%A1%EA%B8%B0-RSC%EC%99%80-css-in-js-React-Server-Component#CSS%20in%20JS-1)

서버컴포넌트와 관련된 문제가 아니더라도, css-in-js는 런타임에 스타일을 생성하기 때문에 어플리케이션의 성능이 저하될 수 있다.

### Vanilla Extract는 이를 어떻게 해결할 수 있을까?

vanilla extract는 TypeScript의 제로 런타임 스타일시트이다.vanilla extract는 typescript를 전처리기로 사용한다. typescript로 안전하게 스타일을 작성한 다음 빌드 과정에서 스타일을 처리한다.

**vanilla extract의 장점**

- typescript로 작성하기 때문에 오타 등으로 style code를 잘못 작성하더라도 쉽게 잡아낼 수 있다.
- 빌드타임에 스타일을 처리하기 때문에 더 빠른 스타일 로딩 시간을 갖는다.

vanilla extract는 런타임이 아닌 빌드타임에 스타일을 처리하기 대문에 서버컴포넌트에서도 충분히 사용 가능하다는 것이다. vanilla extract 뿐만 아니라 pandacss와 같은 다른 zero runtime css-in-js도 이와 같은 이유로 서버컴포넌트에서 사용이 가능하다.

### Vanilla Extract 사용법

**install**

```ts
npm install @vanilla-extract/css
```

NextJs의 경우 다음 패키지를 설치하고 next config를 손봐야한다.

```ts
npm install --save-dev @vanilla-extract/next-plugin
```

```ts
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);
```

모든 스타일 관련 파일은 .css.ts 확장자를 사용하여 작성해야 한다. 사용 방식은 css modules를 사용하는 것과 유사하다.

style 함수를 이용하여 스타일을 선언할 수 있다.

```ts
import { style } from "@vanilla-extract/css";

export const test = style({
  background: "red",
  width: "100px",
  height: "100px",
});
```

style 생성은 가장 기본적인 사용법이다. vanilla extract는 이외에도 theme, sprinkles, recipe와 같은 다양한 기능들을 제공한다.

## 마치며

vanilla extract는 제로 런타임에서 생기는 이점이 가장 크지만, 다른 부가적인 기능들 때문이라도 충분히 사용 가치가 있다고 생각한다. 서버컴포넌트에서도 스타일을 구현할 때 ts의 문법을 사용할 수 있다는 것이 굉장히 매력적이라 생각한다. 도입하여 서버컴포넌트가 필요한 상황에 적절히 사용해보고 싶다.
