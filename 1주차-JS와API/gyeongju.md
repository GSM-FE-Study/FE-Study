# JS로 API요청을 하는 방법.


# API()

### API란 무엇인가요?

API란 "Application Programming Interface"의 약자로, 서로 다른 두 개의 소프트웨어 프로그램이 상호작용할 수 있도록 만들어진 인터페이스를 의미합니다. 간단하게 말해, 어떤 소프트웨어 프로그램에서 제공하는 기능을 다른 프로그램에서도 활용할 수 있도록 제공하는 방법을 말합니다.

### API가 가져야할 내용

1.  요청방식이 들어가야한다. (method)
2.  어떤한 자료를 요청한다. (endpoint)
3.  자료요청에 필요한 추가정보.

그리고 또 알아야할 내용이 있다.  
fetch api에 대해서 알아야한다.

# fetch api

### fetch api 란

Promise API를 활용하는 Http 비동기 통신 라이브러리 이다.

## fetch api 특징

-   비동기 http요청을 좀 더 쓰기 편하게 해주는. API
-   XMLHTTPRequest을 대체
-   Promise 기반 동작

[##_Image|kage@z8eMg/btszojrFGPq/pB3sDY0zmmbV4SJ9lTkvG1/img.png|CDM|1.3|{"originWidth":582,"originHeight":318,"style":"alignCenter","filename":"스크린샷 2023-10-30 오후 5.03.21.png"}_##]

### 설명을 하기전에 http method에 대해서 알아야 한다.

### 1\. GET

> GET 은 클라이언트에서 서버로 어떠한 리소스로 부터 정보를 요청하기 위해 사용되는 메서드이다.

-   북마크에 추가할 수 있다.
-   HTTP 메세지의 헤더에 담겨 전송된다.
-   데이터의 길이의 제안이 있다

### 2\. POST

> POST는 클라이언트에서 서버로 리소스를 생성하거나 업데이트하기 위해 데이터를 보낼 때 사용 되는 메서드다. 예를들면 게시판에 게시글을 작성하는 작업 등을 할 때 사용 된다.

## Ajax란

**Ajax**란 JS(Javascript)의 라이브러리중 하나로 브라우저가 가진 XMLHttpRequest 객체를 이용한 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위해 데이터를 로드하는 기능이다.

즉 , 자바스크립트를 통해서 서버에 데이터를 요청하는 것이다.

**Ajax의 장점**: 웹페이지의 속도향상 서버의 처리가 완료될 때까지 기다리지 않고 처리가 가능하다. 서버에서 Data만 전송하면 되므로 전체적인 코딩의 양이 줄어든다.

**Ajax의 단점**: 히스토리 관리가 되지 않는다. 페이지 이동없는 통신으로 인한 보안상의 문제가 있다.

# axios

**axios**

-   설치 방법

```
> npm install axios
```

**Axios** 기본 문법

```
axios({
  url: 'https://test/api/cafe/list/today', 
  method: 'get', 
  data: { 
    foo: 'diary'
  }
});
```

연동 하는 방법은 다음에 알려주겠습니다 !!