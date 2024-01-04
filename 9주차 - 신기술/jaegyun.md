일단 왜 사랑하는지를 한번 파악해보자

stackoverflow에 따르면

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEAHrY%2FbtsCQ37b9dy%2FqpeM0mr4QOgDuolItH3iM0%2Fimg.jpg">

이렇게 가장 사랑하고, 가장 원하는 프레임워크 1위에 올랐다.

왜 Svelte가 좋을까??

### **1\. 쉬운 사용법**

### **2\. 자바스크립트와 다를바 없는 문법**

이렇게 두가지로 나눠볼 수 있다.

### **1\. 쉬운 사용법**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9IVFk%2FbtsCWKehbeM%2F7kcFAkoGlQ8rCQVatBGP2k%2Fimg.png">

출처 : codingApple

이렇게 html 태그, css style, javascript의 문법을

한 파일 내에서 사용 할 수 있는 것입니다.

또한 적은 코드로 높은 가독성을 유지하고, 개발 시간을 단축시켜줍니다.

가독성이 좋기 때문에 리팩토링이 보다 쉬워집니다.

**그렇다면 Routing은?**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8mgQf%2FbtsCZiaJvTx%2Fl2pnlJo6rHp6Y4pFHOANH1%2Fimg.png">

이렇게 쓰면 /about페이지가 완성이 된다.

아주 쉬운 문법이 아닐수가 없다.

### **2\. 자바스크립트와 다를 바 없는 문법**

```<script></script>```와 같은

script태그를 사용하기 때문에 javascript와 아주 비슷한 문법을 사용할 것이다.

그 이외에도

서버 -> 유저 데이터 전송을 더 쉽게 할 수 있다거나

등의 장점이 있다.

### **그렇다면 단점은 뭘까?**

가장 큰 단점으로는 

모든 구문이 같은 reactive scope를 공유해야하기 때문에 펑션 내부가 항상 컴포넌트 내부에 노출되어 있어야 한다.

따라서 분리하여 import/export 할 수 없다.

그래서 이러한 단점만 잘 파악하고 쓸 수 있다면 나쁘지 않은 것 같다.