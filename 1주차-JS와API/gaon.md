Javascript에서는 API를 어떻게 가져오고 사용할까?
​
그전에 API가 뭔지 알아보자
​

## **API**

​
API는 우리가 식당에가서 밥을 주문하고 밥을 먹는거와 같다고 할 수 있다
​
자신이 원하는 식당에 가서 원하는 메뉴를 주문하고 그 메뉴를 받아 먹는다
​
API도 똑같다
​
자신이 원하는 서비스에서 원하는 기능이나 데이터를 요청하고 받은 응답을 받아 활용한다
​
본론으로 돌아와서 js에서는 어떻게 api를 가져오는지 알아보자
​
js에서는 다양한 방법으로 api를 가져오지만 요즘은 js 내장 함수인 fetch와 외부 라이브러리인 axios를 많이 사용한다
​

#### **fetch**

​
fetch는 js의 내장 함수로 promise기반으로 promise를 사용하는 것과 비슷하다고 할수 있다
​
내장 함수여서 라이브러리나 의존성 없이 사용할수 있다는 장점이 있다
​

```js
fetch("requestURL").then((response) => console.log(response));
```

​
위의 코드가 fetch함수의 기본형태이다
​
fetch는 비동기적으로 작동하는데 코드를 보면 requestURL로 요청을 보낸뒤 response가 오면 console.log()를 실행시키는 코드이다
​
여담으로 나는 fetch함수를 노마드코더 강의에서 처음 사용해보았는데 비동기나 promise에 대한 지식이 없었어서 이해를 못한 기억이 있다
​

#### **axios**

​
axios는 외부 라이브러리로 다양한 환경에서 사용수 있고 fetch와 마찬가지로 promise 기반으로 작동한다
​
다양한 요청들을 간단하게 사용 할 수 있다는 장점이 있다
​

```js
axios.get("requestURL").then((response) => console.log(response.data));
```

​
위의 코드는 axios의 기본형태이다
​
promise기반으로 작동해서 코드만 본다면 fetch와 유사하다
​
이렇게 js에서 사람들이 많이 사용하는 api를 가져오는 방법을 알아보았다
