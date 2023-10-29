오늘은 JS와 API에 대해서 알아보도록 하겠습니다.

#### **JS (Javascript)  
  
**

JS에 대해서 설명을 해주자면 여기서 설명할 JS(javascript)는 프로그래밍 언어로, html과 css로만 구성되어있는

딱딱한 웹페이지를 동적으로 바꿔주기 위한 언어입니다.

#### **API ( Application Programming Interface )**

API의 정의는 응용프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제공한 것이다.

쉽게 말해 두 애플리케이션(Aplication)에 대한 계약이라 생각하면 됩니다.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230216170349/What-is-an-API.png">

위 그림에서 **아랫부분**을 보면 **손님(Customer)**이 **주문(Request)**을 하고 **주문을 전한** 다음 주문받은 것을 가져가서

**손님(Customer)**에게 전달해줍니다.

API는 이것을 간추려 준것으로 저희가 집중 할 것은 **Client**가 말하는 **요청(Request)**와 **응답(Response)**입니다.

#### **JS와 API**

그럼 JS와 API의 사용예제를 한번 봐보겠습니다.

JS에서 API를 쓰려면 방법을 알아야하는데

방법은 총 4가지로

**1\. XML**

**2\. AJAX**

**3\. FETCH**

**4\. AXIOS**

이렇게 나눠 볼 수 있습니다. 

#### 1\. XML

xml은 정확히 말하면  XML HTTP Reques로, ES6에서는 더는 사용하지 않기 때문에 특징만 설명해보겠습니다.

특징이라고는 XML이라는게 들어가지만 XML이 아닌 모든것의 데이터를 가져 올 수 있습니다.

사용방법을 간추려 보자면

1\. 요청 초기화

2\. 이벤트 핸들러 함수 지정

3\. send()함수를 통해서 요청보내기

이렇게 나눌수 있습니다.

#### 2\. AJAX

AJAX는 **Asynchronous Javascript And Xml**의 약자입니다.

JS의 라이브러리 중 하나이며, 브라우저가 가지고 있는 **XMLHttpRequest 객체**를 이용해서 일부 페이지만 세로고침하는 기능입니다.

<img src="https://blog.kakaocdn.net/dn/c33Rwn/btsziPkjyG1/cO4Q54O0HdB87MjkBVVN80/img.png">

위 그림은 비동기를 왜 쓰는지 이유를 쉽게 이해할 수 있는 그림입니다.

위 그림에서는 왼쪽의 비동기가 훨씬 빨라보이는데, **동기는 Request를 보내고 Response를 받은 후** 에야

다음 Request를 보내지만 **비동기는 상관 없이 Request를 보내고 Response와는 상관없이 동작** 하기 때문입ㄴ;다.

#### 3\. FETCH

**fetch()**는 Js 내장 함수로, 콜백 기반 API인 [XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)와 달리, Fetch API는 [서비스 워커 (_웹 애플리케이션을 네이티브 앱처럼 로컬에 설치해서 안정성과 실행 성능을 향상시키는 역할_ )](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)에서도 쉽게 사용할 수 있는 **프로미스** 기반의 개선된 대체제입니다.

**fetch()** 함수는 첫번째 인자에 URL, 두번째엔 option(method, headers, body)를 설정해줄 수 있습니다.

Response로부터는 상태, 응답 header, 응답 전문 body를 받아올 수 있습니다.

예시를 한번 보자면

```
fetch(`URL`)
	.then((response) => response.json())
	.then((data) => console.log(data));
    .catch((error) => console.log(error));
```

위 코드에서는 response를 js에서 읽을 수 있게 json타입으로 변환해주고

응답이 오면 파싱된 data를 console에 찍어주는 코드입니다. catch로는 실패했을 경우를 대비해 실패시에

console에 찍게 합니다.

#### 4\. AXIOS

axios의 특징으로는 

1\. 브라우저를 위해 XMLHttpRequests 생성

2\. node.js를 위해 http 요청 생성

3\. Promise API를 지원 (Ex .then)

4\. 요청 및 응답 인터셉트 및 데이터 변환

5\. JSON 데이터 자동 변환

6\. XSRF를 막기 위한 클라이언트 사이드 지원

이렇게 6가지 특징이 있고, 코드를 봐보자면, 

```
axios({
	url: 'url',
    method: 'get',
    data: {
    	name: 'jaegyun'
    }
});
```

axios는 위와 같이 http 요청을 보낼 수 있습니다.

하지만 보통은 보기 쉽게 method를 axios.뒤에 씁니다 ex) axios.get, axios.post

다음은 내가 실제로 사용한 코드를 봐보자

```
const getComment = () => {
        axios.get(`URL`)
        .then((response) => {
        	console.log('응답', response)
        })
        .catch(error => {
            console.log('에러', error);
        })
    }
```

위의 getComment 함수는 URL에서 response를 받아오면 .then을 타고 들어가, response를 console에 찍어줄 것이고,

만약 데이터가 불러와지지 않는다면 .catch로 들어가 console에 error을 출력 할 것입니다.

글이 도움이 되셨으면 좋겠습니다. (: