![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbzgx3M%2FbtszwebBq30%2FMUI6phih8OW6MJGTGghGKk%2Fimg.png)

내가 올해 초반에 처음으로 자바스크립트로 Open API를 사용하여서 토이프로젝트를 진행해 보았다.  
근데 API연동에 대해서 아는 내용이 없어서
많이 힘들었지만, 그런 사람들을 위해서 이 블로그를 작성해 본다.

### **⭐️ API가 뭐야**

API는 (Application Programming Interfaces) 프로그래밍 언어로 만들어진 일종의 데이터와 기능의 모음, 구성이다.  
장점으로는 **API는 특정 기능에 대한 복잡한 코드를 사용하기 쉽게 도움**을 줄 수 있다고 생각하면 편하다.

대부분 API는 2가지로 나뉘게 되는데

- Broswer API (웹 카메라, 마이크)
- Third-party API (Web API, Google Maps API)

위와 같이 나뉜다.

먼저 Broswer API는 브라우저에 내장이 된 API이며, 브라우저와 컴퓨터 환경에서 관련한 데이터를  
가지고 유용한 일을 한다. 다음으로 Third-party API는 브라우저에 기본적으로 내장되어 있는 것이 아니라

다른 플랫폼에서 제공되는 데 사용한다.

### **⭐️ REST API가 뭐야**

HTTP Method나 URI라는 용어가 나온다.
REST API는 웹상에서 사용되는 여러 리소스를 HTTP URI로 표현을 하고, 해당 리소스를 대한 행위를
HTTP Method로 정의하는 방식을 말한다.

**🖥 HTTP Method❓..**

![](https://blog.kakaocdn.net/dn/pgtAu/btszuFHKnn4/Cq3BzN9tFx2grmCDoWx3T1/img.png)

- **GET : 리소스 조회**
- **POST : 데이터 추가, 등록**
- **PUT : 리소스 대체, 수정 / 해당 리소스가 없으면 새롭게 생성**
- **DELETE : 리소스 삭제**
- **PATCH : 리소스 부분 변경 (수정)**

### **⭐️ Axios**

Axios는 내가 처음으로 사용해서 API를 연동했던 방법이다.  
Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.

#### **설치방법**

```
npm install axios
yarn add axios
pnpm install axios
```

예시로 GET 코드를 작성해 보겠다.

#### **GET**

```tsx
const [city, setCity] = useState("seoul");

const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCity(e.target.value);
};

const clickChangeCity = async () => {
  if (city) {
    const api = {
      url: "https://api.openweathermap.org/data/2.5/weather",
      api_key: "21216b991f3181c2734xxxxxxxxxxxx",
    };

    try {
      const res = await axios.get(`${api.url}?q=${city}&appid=${api.api_key}`);

      if (res.status === 200) {
        setCityName(city);
        setCity("");
      } else {
        alert("없는 도시입니다.");
      }
    } catch (error) {
      alert("서버에 오류가 발생했습니다.");
    }
  } else {
    alert("도시를 입력하세요.");
  }
};
```

내가 자료 보면서 만든 Open API 날씨를 알려주는 프로젝트이다.
아래는 작성한 GitHub Repo이다.

[https://github.com/TaerangLee/TypeScript-Weather](https://github.com/TaerangLee/TypeScript-Weather)

위와 같은 코드는 간단하게 설명을 하면

처음에 useState를 사용하여서 seoul이라는 값을 초기로 입력한다.  
const api 그 부분에서 API를 함수 내에서 저장을 해줬다. 다음으로는 API를 사용해서 data 값을 불러오게 되었는데

```tsx
const res = await axios.get(`${api.url}?q=${city}&appid=${api.api_key}`);
```

axios.get을 사용해서 받아오게 된다.  
많은 개발자들이나 네트워크를 공부하고 있는 사람들이면 많이 아는 상태코드가 200일 경우에는   
서버가 요청을 제대로 처리했다는 뜻이다. 성공을 했을 경우에는 setCity를 통해서 data 값을 넣어준다.

### **⭐️ async.. await?**

위 코드에서 사용되었던 async와 await가 뭘까?

async와 await는 JS의 비동기 처리 패턴 중 가장 최근에 나온 문법이다.  
사용방법은 아래와 같다.

```tsx
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

**async**는 function 앞에서 사용을 한다. function 앞에 async를 사용하면 해당 함수는 항상 promise를 반환한다.  
promise가 아닌 값을 반환하더라도 이행 상태의 promise로 값을 이해된 promise가 반환이 된다.

**promise**는? 비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능이다.

**await**는 async function 함수 안에서만 동작을 한다. await는 '기다리다'라는 뜻을 가진 영단어로, promise가 처리가   
될 때까지 기다리는 역할을 한다. 그리고 그 결과를 이후에 반환을 하게 된다.

## 마치며

내가 작성하면서 적은 내용들은 최대한 초심자에게 전달하고 싶은 내용을 담은 블로그이다.  
모든 사람들에게 처음으로 시작하는 일이 있듯이 axios, API 연동으로 사용하고 싶은 내용이 있을 때  
이 블로그를 통해서 조금이나마 도움이 되었으면 좋겠다. 또 나중에 React, NextJs를 사용하게 되면 instance를  
사용하는 경우도 되게 많이 사용을 하는데 이 부분에 대해서 공부를 해보고 instance에 대해서 공부를 하면 API에

대해서 더 많이 알게 될 수 있을 것 같다.
