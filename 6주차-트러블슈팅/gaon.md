## 트러블 슈팅

코드를 작성하다 보면 정말 많은 에러와 문제가 발생한다

이런 문제가 생기면 왜 이 문제가 생기고 어떻게 해결하는지가 중요하다

만약 생각 없이 그냥 에러를 복사해 chat gpt에게 해결해 달라고 하거나 검색해 바로 해결만 한다면

다음에 같은 에러가 생겼을때 해결 하지 못할것이다 이럴때 할수 있는게 트러블 슈팅이다

### 트러블 슈팅이란 문제 해결을 위해 문제의 원인을 논리적으로 찾아 해결하는 것이다

나의 트러블 슈팅 경험을 말해 보겠다...!

### CORS ERROR

[##_Image|kage@xZqZg/btsBufNE0Sa/lFcNkw4ztNBMe2VKP3JKp1/img.png|CDM|1.3|{"originWidth":1400,"originHeight":185,"style":"alignCenter"}_##]

내가 open api인 알라딘 책 정보 api를 사용해 개인 토이 프로젝트를 하고 있는 상황이었다

그런데 내가 책 검색을 하는 api를 axios로 요청을 보냈는데 돌아오는 응답은 CORS ERROR였다

CORS ERROR는 클라이언트에서 서버로 요청을 보낼때 같은 출처끼리만 요청, 응답을 하고 싶은데 출처가 다른 곳에서 요청을 보냈을때 생기는 에러이다

이런 에러를 해결 하기위해서 검색을 해보니 프록시 미들웨어를 사용해 해결해보라는 것을 알게 되었다

그래서

```jsx
const { createProxyMiddleware } = require(`http-proxy-middleware`);

module.exports = (app) => {
  app.use(
    `/api/list`,
    createProxyMiddleware({
      target: encodeURI(`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx`),
      changeOrigin: true,
      pathRewrite: {
        "/api/list": "",
      },
    })
  );

  app.use(
    `/api/suggest`,
    createProxyMiddleware({
      target: encodeURI(`http://www.aladin.co.kr/ttb/api/ItemList.aspx`),
      changeOrigin: true,
      pathRewrite: {
        "/api/suggest": "",
      },
    })
  );
};
```

이런 식으로 프록시 설정을 해주고 `/api/list`로 요청을 보내니 정상정으로 응답이 왔다

프록시를 사용해 문제가 해결되는 이유는 서버끼리는 CORS ERROR가 발생하지 않는다는 점을 활용한 해결 방법이다 그래서

프록시 서버에서 알라딘 api에 요청을 보내고 받은 응답을 다시 클라이언트로 보내주는 방식이다..!

### 마무리

이런식으로 문제를 어떤식으로 해결했는지를 정리해 놓으면 다음에 같은 문제를 마주 했을때 보다 쉽게 해결 할수 있을거 같다 앞으로 이런 트러블 슈팅을 한것들이 더 있다면 블로그에 정리해 보아야겠다
