<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQWp7W%2FbtsAji5lGil%2F7rbPv4Mb9nRHMu8pTFdNj0%2Fimg.png" width="300px">

프론트엔드 개발자들이면 css 속성에 대해서 잘 알고 있을 것 같은데, 나는 아직도 개발을 하면서 css 단위에 대해서
정확히 찾아보고 뭐가 다른지에 대해서는 은근히 헷갈린다. 이번 이 블로그를 통해 나와 같은 어려움을 겪은 사람들이 
이해가 쉽게 한번 설명을 해보고자 한다.

### **⭐️ PX**

먼저 px이다.  
css 단위 속성을 선택할 때 기본 적으로 px단위로 기본 설정을 하여 사용한다.  
하지만 px 같은 경우에는 절대 단위이므로 상황에 따라 역동적 특성이 없어 사용자 접근성이 낮다.

**px 같은 경우에는 또 너비값과 높잇값을 지정을 한다면 고정이 되기 때문에 웹 브라우저의 크기를 늘리거나, 줄여도 안 변한다.**

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdzXZMN%2FbtsAcR123Ti%2FMxVp91ctxm4Bh9WPYHvLa0%2Fimg.png)

### **⭐️ VW**

vw(viewport width)는 부모태그 기준으로 정해지는 **%** 단위의 문제를 개선하기 위해 vw, vh가 나왔다.
vw, vh는 부모 태그가 아니라 웹 브라우저의 크기를 기준으로 웹 브라우저의 너비를 백분율로 환산하여 크기를 결정한다.
아래와 같은 예시는 width와 height를 30vw씩 지정을 했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTDDSZ%2FbtsAjkCrmzf%2FuSSVgeUk8AVlmDsAh2HnD1%2Fimg.png)

위와 같이 웹 브라우저를 줄이게 된다면 vw는 줄어든 너비값에 맞춰 높이와 너비가 줄어든다. 30vw는 웹 브라우저
너비값이 1000px 일 때 300px이지만 100px로 줄어든다면 30px로 줄어들게 된다는 것이다.
즉 vw는 웹 브라우저의 너비만을 기준으로 크기가 결정되기 때문에 웹 브라우저의 높이는 무관하다.

### **⭐️ VH**

vh(viewport heigth)는 vw와 같은 속성이지만 가로가 아닌 세로를 나타낸다.  
아래와 같은 예시는 width와 height를 50vh씩 지정을 했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFNpzK%2FbtsAakdaBiI%2FYls3DyDKjXIu3fZenYwMn1%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtLRm1%2FbtsAeEPcdfS%2F1N574BSkowoQCdikgHVOS1%2Fimg.png)

마찬가지로 웹 브라우저의 높잇값이 줄어들면 영역의 세로 길이가 그에 맞춰서 줄어든다.  
vh는 vw와 반대로 높이를 기준이기에 웹 브라우저의 너비와 무관하다.

**먼저 em와 rem에 대해서 설명을 하기 전에 상대 단위에 대해서 개념을 정확히 알고 넘어가야 한다.**

## **상대 단위**❗️

상대 단위는 고정이 되지 않고 어떤 기준에 따라서 유동적으로 바꿀 수 있는 단위를 이야기한다.
em, rem, % 등이 대표적인 상대 단위이다.

### **⭐️ %**

그다음으로는 % 이다.%는 상대적 단위인 부모태그인 body 태그를 기준으로 너비값이 변하게 된다.
하지만 body 태그 자체에는 높잇값이 없기 때문에 %로 설정해도 의미가 없다.
아래와 같은 경우가 이제 높잇값이 없기 때문에 지금 TEXT 가로만 적용이 된 상태이다.
높이에 맞춰서 나온다는 뜻이다. 만약 높잇값을 주고 싶다면 그 상위인 body에 적용을 하면 된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdlakV%2FbtsAbckOd4p%2FuAVVVwJdWJiq1Njji56JOK%2Fimg.png)

### **⭐️ EM**

em은 요소의 글꼴의 크기를 1em로 갖는다.
이 말은 만약 해당 요소의 font-size를 지정하지 않는다면, 부모 요소의 글꼴 1em을 가지게 되는 것이다.  
부모 요소를 기준으로 자식 요소의 크기를 정한다고 알면 이해하기 쉽다.  
아래와 같이 입력을 하게 되면 부모의 size는
10px이고 자식의 size는 0.5 rem이기 때문에 px이 된다.

```
.parent { font-size : 10px }
.child { font-size: 0.5em }
```

### **⭐️ REM**

rem은 최상위의 요소의 html를 기준으로 해당 요소의 크기를 결정한다.
아래와 같이 입력을 하게 된다면 div의 최상위 요소의 html의 크기가
20px이므로 div의 폰크 크기는 20 \* 1.5 = 30px이 된다.
1 rem = html 요소에 지정된 font-size가 되는 것이다!!

```
html { font-size: 20px }
div { font-size: 1.5rem }
```

프로젝트를 하면서 많은 단위를 사용할 것이다. 하지만 상황에 맞게 단위를 사용하는 것이 정말 중요하다.  
이보다 더 많은 css 단위 속성에 대해서 있지만, 대표적으로 사용하는 단위를 조사하여 블로그를 작성해 본다.  
많은 개발자들이 이 블로그를 통해서 css 단위 속성에 대해서 이해하는 내용이 됐으면 좋겠다.
