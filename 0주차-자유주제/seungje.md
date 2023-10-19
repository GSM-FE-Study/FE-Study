# MSW란?

## **Mocking**이란 무엇일까?

**MSW**를 알기 전에 먼저 **Mocking**이라는 개념에 대해 이해할 필요가 있다.

Water Fall 개발 방법론은 폭포수가 위에서 아래로 떨어지듯이 한 단계씩 순차적으로 진행된다. 이전 단계로 돌아가지 않고 한 단계가 완전히 끝난 후에 다음 단계로 넘어간다.

하지만 잦은 요구사항 변경이 발생하거나 요구사항 분석 및 설계가 어려운 경우라면 어떨까? 이러한 경우에는 개발 단계를 명확히 구분하지 않고 각 단계를 반복적으로 수행하는 Agile 방법론이 더 효과적일 것이다.

Agile 방법론을 채택하게 된다면 프론트엔드 개발과 백엔드 개발이 병행된다. 만약 백엔드에서 API 개발이 완료되지 않았는데 프론트에서 백엔드의 API가 필요하다면 굉장히 곤란할 것이다. 해당 부분이 완성되기 전까지는 다른 파트를 개발하거나 진행을 미루어야 할 것이다.
<br/>
<br/>
우리는 API에 종속적인 개발 때문에 진행이 느려지는 걸 원치 않는다. 개발 진행이 늦어진다면 테스트에 쏟을 수 있는 시간이 줄어든다. 프론트엔드 개발은 프로젝트 마무리에 가깝기 때문에 더욱 시간의 압박이 늘어난다.

API로 데이터를 주고받을 수 없다면.. 모의 데이터를 만들면 되지 않을까? 그렇다. 모의 데이터를 만들어 활용하는 방식을 Mocking이라고 한다.

기존에는 화면에 필요한 데이터의 상태들을 직접 내부 로직에 Mocking 해서 필요한 부분에 삽입하였다. 이러한 방법은 구현이 쉽고 빠르게 작업할 수 있지만 직접 Mocking 해야 하고 응답 상태에 따라 로직을 분리하기 어렵다는 단점이 있다. 나도 이러한 방법을 주로 사용하였으며 개발 중 불편함을 자주 느꼈다.

## **MSW**!!

Mocking과 관련된 문제를 해결하기 위해 MSW(Mock Service Worker)라는 라이브러리가 나왔다. MSW는 서버로 가는 요청을 가로채서 모의 응답을 클라이언트 측으로 보내준다. MSW를 사용하면 실제 서버가 존재하지 않아도 네트워크 단에서 Mocking 할 수 있다.

MSW에서 SW(Service Worker)는 일종의 대리 서버이다. Service Worker로 웹 어플리케이션의 네트워크 요청을 가로채고 조작할 수 있다. 이를 통해 네트워크 연결이 불안정하거나 오프라인 상태에서도 원활하게 동작이 가능하다.

### 동작 원리

브라우저에서 요청이 일어나면 Service Worker가 브라우저의 Fetch API를 사용하여 웹 어플리케이션에서 발생하는 HTTP 요청을 가로챈다. 가로채진 요청은 MSW에서 정의된 요청 패턴과 일치하는지 확인된다. 만약 요청 패턴이 일치하다면 MSW에서 정의된 응답을 생성하고 반환한다. MSW는 원래의 요청을 실제 서버로 보내지 않고 모의 응답을 반환하기 때문에 서버에 의존하지 않고도 프론트엔드 개발이 가능하다.

### **개발 방식**

웹 어플리케이션의 요구사항이 정해진다면 프론트엔드 개발자와 백엔드 개발자가 API 스펙을 합의한다. 백엔드 개발자는 프론트엔드 개발자에게 API 문서를 통하여 API 스펙을 전달한다. 프론트엔드 개발자는 MSW를 통해 Mocking을 진행하고 어플리케이션을 개발한다.

## MSW 사용

### 설치

```
pnpm install msw -D
```

### 세팅

public directory에 Service Worker를 위한 JS를 생성해야 한다.

```
pnpx msw init [Public Directory] --save
```

### 작성

src/mocks 디렉토리를 생성하여 mocks/handlers를 작성한다.

아래 코드대로면 request url로 get요청을 하면 1초 후에 HTTP status code 200과 함께 user정보값이 반환된다.

```ts
import { rest } from "msw";

export const handlers = [
  rest.get("request url", async (req, res, ctx) => {
    return res(
      ctx.status(200); //응답 상태
      ctx.delay(1000); //응답 시간
      ctx.json({ // 응답 데이터
      	"user": {
            "name": "LeeSeungje",
            "age": "18",
        }
      })
    );
  }),
];
```

모의 응답을 위한 handler를 MSW에서 사용할 수 있도록 mocks/browser에 주입한다.

```ts
import { setupWorker } from "msw";
import handlers from "./handlers";

export const worker = setupWorker(...handlers);
```

MSW를 실행시킬 수 있는 코드를 어플리케이션의 진입점에 추가한다.

```ts
import { worker } from "./mocks/browser";

worker.start();
```

로컬 환경에서 어플리케이션을 실행시키면 \[MSW\] Mocking enabled.라는 메시지를 확인할 수 있다.

## 마치며

MSW는 Agile 개발 방법론과 아주 좋은 시너지를 낼 수 있는 라이브러리 같다. 하지만 해커톤과 같은 빠른 개발이 필요한 상황에서는 API 스펙을 공유하고 문서화할 시간이 적으므로 화면에 필요한 데이터의 상태들을 직접 내부 로직에 Mocking 하는 게 좋을 것이라 생각된다. 서버에 의존하지 않고 미리 개발 가능하다는 점이 굉장히 매력적이다.

## Reference

[tech.kakao.com](https://tech.kakao.com/2021/09/29/mocking-fe/)
