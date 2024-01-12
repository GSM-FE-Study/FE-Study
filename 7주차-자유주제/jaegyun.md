### 1\. eval

### 2\. innerHTML

웹 프론트엔드의 보안은 사실 제가 아는것보다 훨씬 많겠지만 제가 이해한 것들과 이해한것을 토대로 작성하겠습니다!!

### 1\. eval

먼저 JavaScript의 evel함수는 조사 하기 위해서 chrome에 eval을 치고, 처음 modern web docs를 들어가자마자

<img src="https://blog.kakaocdn.net/dn/bAYAWD/btsBGo5NTkE/AbKsbN93GhvRdjuTQ0voIK/img.png">

이런 이미지가 경고를 띄워버린다.

사실 나는 조사하기 전까지는 eval함수를 전혀 몰랐는데 이 이유를 생각해보면

내가 모름 -> 기술에서 많이 안쓰임 -> 안쓰이는 이유가 있음

이런식으로 정의 내려 봤다.

### eval()은??

### [매개변수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval#%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98)

[string](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval#string)

JavaScript 표현식, 명령문, 또는 연속되는 다수의 명령문을 나타내는 문자열. 표현식은 이미 존재하는 객체의 변수나 속성을 포함할 수 있습니다.

### [반환값](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval#%EB%B0%98%ED%99%98%EA%B0%92)

주어진 코드를 평가하여 얻은 값. 값이 없다면 [undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)를 반환합니다.

### eval()이 위험한 이유?

<img src="https://blog.kakaocdn.net/dn/JtN1p/btsBMUh4EH0/eT12b63XPWhBn9HTmfGntk/img.jpg">

1\. eval은 인자로 받은 함수나 코드를 caller의 권한으로 실행함

2\. eval()은 JS 인터프리터를 사용해야 하기 때문에 다른 대안들보다 느림

3\. eval을 사용하면 브라우저는 기계 코드에 해당 변수가 있는지 확인하고 값을 대입하기 위해 길고 무거운 변수명 검색을 수행해야 함

4\. eval()을 통해 자료형 변경 등 변수에 변화가 일어날 수 있으며, 브라우저는 이에 대응하기 위해 기계 코드를 재작성해야 함

### 2\. innerHTML

innerHTML은 사실 코드 하나로 설명할 수 있을 정도로 쉽고, 기본적으로 위험한 요소이다.

```
const userInput = '<img src="x" onerror="alert(\'XSS Attack!\')">';
document.getElementById('someElement').innerHTML = userInput;
```

이 코드만 봐도 userInput하는 곳에 script코드를 적어서 코드에 에러가 가능하게 할 수 있을 것 같다.

사실 innerHTML은 이것 이외에도 안쓰이는 이유가 있다.

1\. **성능:** innerHTML을 사용하면 브라우저가 기존의 HTML을 파싱하고 다시 렌더링해야 하므로 성능에 영향을 미칠 수 있습니다. 특히 대규모 프로젝트에서는 불필요한 HTML을 다시 렌더링하는 것이 성능을 저하시킬 수 있습니다.

2\. **코드 가독성 및 유지 보수:** innerHTML을 사용하면 동적으로 생성된 HTML 코드가 JavaScript 문자열 안에 섞여 있어 코드의 가독성이 떨어질 수 있습니다. 이는 코드의 유지 보수를 어렵게 만들 수 있습니다.

이렇게 2가지로 나뉘어 진다.

참고자료 - MDN - eval();

참고자료 - MDN - Element.innerHTML