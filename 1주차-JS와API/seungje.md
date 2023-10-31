## JS API연동? 어렵지 않아!

나는 처음 API연동할 때 상당히 고생했다. 아마 서버와 데이터를 주고받는 과정을 제대로 이해하지 못하고 무작정 시도한 탓이 아니었을까.? 이 글이 작년의 나 같은 사람에게 도움이 되었으면 좋겠다.

## API가 뭐길래??

API는 두 소프트웨어가 서로 통신할 수 있도록 해주는 매커니즘이다. 학교 급식 조회 서비스 어플리케이션의 클라이언트에서 서버에 급식 정보를 요청하면 서버가 급식 정보를 응답해 준다. 이게 API를 이용한 통신이다. 요청과 응답을 사용하여 두 소프트웨어가 서로 통신할 수 있다.

일반적으로 API는 클라이언트와 서버 측면에서 사용된다. 요청을 보내는 소프트웨어를 클라이언트라고 하고, 요청에 따라 응답하는 소프트웨어를 서버라고 한다.

## REST API는 뭐야??

REST는 서버에 액세스 하여 사용할 수 있는 메서드들의 집합을 의미한다. POST, GET, PATCH 등이 있다. 클라이언트와 서버는 HTTP를 이용하여 정보를 교환한다. 급식 정보를 서버에 요청할 때에는 GET 메서드를 사용한다. 서버에 새로운 급식 정보를 추가하고 싶으면 POST 메서드를 사용한다. 급식 정보가 변동되어 수정하고 싶으면 PATCH 메서드를 사용한다. 자료의 일부를 수정할 때에는 PATCH, 전체적인 수정은 PUT 메서드를 사용한다.

## 그럼 API를 어떻게 사용하는데??..!

JavaScript의 내장 라이브러리인 fetch가 있다. fetch는 내장 라이브러리이기 때문에 안정적이고, 별도 import 없이 API 요청이 가능하다. 하지만 json 변환 과정이 필요하고 지원하지 않는 브라우저가 존재하는 등의 아쉬운 점이 있다. 그래서 axios라는 라이브러리를 사용하여 보다 간단하게 API 요청을 해볼 것이다.

## Axios..?!

Axios는 브라우저, Node.js를 위한 Promise API를 사용하는 HTTP 비동기 통신 라이브러리이다. 다양한 편리한 기능을 제공하며 크로스 브라우징이 우수하다. 때문에 이 블로그에서는 axios를 사용하여 간편하게 API 연동을 해볼 것이다.

#### install

```
npm install axios
yarn add axios
pnpm install axios
```

#### 사용

axios에서 지원하는 http 메서드 별칭으로 손쉽게 사용할 수 있다.

```js
axios.get(url[, config])            // GET
axios.post(url[, data[, config]])   // POST
axios.put(url[, data[, config]])    // PUT
axios.patch(url[, data[, config]])  // PATCH
axios.delete(url[, config])         // DELETE
```

```js
axios.post(
  "url",
  {
    title: "title",
    content: "content",
  },
  {
    headers: {
      Authorization: "Bearer . . .",
    },
  }
);
```

별칭 메서드 사용 시 config에서 url, method, data 속성을 지정하지 않아도 된다.

실제 나이스 Open API에 급식 정보를 요청해보았다.

```js
const getMeal = async () => {
  const { data } = await axios.get(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_TOKEN}&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=20231030`
  );
  return data.mealServiceDietInfo[1].row[0];
};
```

getMeal이라는 함수를 제작하여 급식 정보를 가져왔다. axios의 get 메서드 별칭을 사용해서 나이스 서버에 급식 정보를 요청하였다.

개발자 도구의 Network 탭에서 반환되는 http status로 요청 성공 여부를 확인할 수 있다.

요청을 통해 얻은 response에는 다음 정보가 들어있다.

- data : 서버가 제공한 응답 data
- status : 서버 응답의 HTTP 상태 코드
- statusText : 서버 응답으로부터의 HTTP 상태 메세지
- headers : 모든 헤더 이름이 소문자로 제공
- config : 요청에 대해 axios에 설정된 구성

axios를 사용하여 정말 쉽게 API 요청을 해보았다. 하지만 axios의 기능은 이게 다가 아니다!!

### instance

axios의. create 메서드를 사용하여 axios instance를 생성할 수 있다. axios instance를 만들면 기본 URL이나 헤더, 타임아웃등 특정 기본 구성 옵션을 지정할 수 있다. 또한 요청 전, 응답 전에 실행되는 함수인 interceptor를 추가할 수 있다. 이를 통해 모든 요청에 일관된 설정을 유지하고, 요청 및 응답을 중앙에서 처리할 수 있다.

```js
const apiInstance = axios.create({
  baseURL: "https://example.com/api/",
  headers: { "X-Custom-Header": "foobar" },
  timeout: 1000,
});
```

실제 나이스 Open API에 요청하는 코드도 axios instance를 사용해서 리팩토링 해보았다.

```js
const apiInstance = axios.create({
  baseURL: "https://open.neis.go.kr/hub/",
  params: {
    Type: "json",
    KEY: process.env.REACT_APP_TOKEN,
  },
});

const getMeal = async () => {
  const { data } = await apiInstance.get("mealServiceDietInfo", {
    params: {
      ATPT_OFCDC_SC_CODE: "F10",
      SD_SCHUL_CODE: "7380292",
      MLSV_YMD: "20231030",
    },
  });
  return data.mealServiceDietInfo[1].row[0];
};
```

이렇게 되면 기본 URL 및 KEY 등의 설정이 미리 구성되어 있으므로 다른 요청들을 간소화시킬 수 있다. 이렇게 하면 코드가 더욱 모듈화 되며, axios instance를 사용하여 다른 요청에도 동일한 설정을 재사용할 수 있다.

## 마치며

API에 대해 처음부터 알아보고 끝으로는 axios instance를 활용하여 실제 API 요청까지 해보았다. 블로그를 작성하며 개념적인 부분들을 보완할 수 있었고, 개념들을 활용하여 요청하는 데에는 얼마 걸리지 않았다. 사실 API 요청을 잘하려면 API 명세서를 많이 보는 게 중요한 것 같다. 각 API마다 명세가 다르고 구현하는 방법도 다르기 때문이다. 나이스 Open API는 명세서가 개발자 친화적으로 작성되어있지 않아 처음 시도했을 때에는 헷갈리는 부분이 많았다. 이 부분이 개선된다면 나 같은 개발을 배워가는 입장인 개발자들에게 많은 도움이 될 것 같다.

## Reference

[Fetch API 사용하기 - Web API | MDN

Fetch API는 HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공합니다. Fetch API가 제공하는 전역 fetch() 메서드로 네트워크의 리소스를

developer.mozilla.org](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

[급식식단정보 | 데이터셋 상세 Sheet | 나이스 교육정보 개방 포털

내용 - 학교에서 제공하는 현재년도 급식의 요리명, 원산지정보, 칼로리정보, 영양정보 등의 일자별 현황입니다. - 요리명에 표시된 번호 : 알레르기를 유발할수 있는 식재료입니다. - 알레르기

open.neis.go.kr](https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17320190722180924242823&infSeq=1)
