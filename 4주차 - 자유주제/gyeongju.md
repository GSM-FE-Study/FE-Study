# js event

## 마우스 이벤트 종류

-   click : 사용자가 해당 요소를 클릭했을 때 발생 한다
-   mousedown : 사용자가 해당 요소에서 마우스 버튼을 눌렀을 때 발생 한다
-   mouseup : 사용자가 해당 요소에서 눌렀던 마우스 버튼을 때었을 때 발생 한다
-   dbclick : 사용자가 해당 요소에서 마우스 버튼을 더블 클릭했을 때 발생 한다
-   mouseover : 사용자가 해당 요소에서 마우스를 움직였을 때 발생 한다
-   mouseout : 사용자가 마우스를 해당 요소 안에서 바깥으로 옮겼을 때 발생 한다
-   mouseenter : 사용자가 마우스를 해당 요소 바깥에서 안으로 옮겼을 때 발생 한다
-   mouseleave : 사용자가 마우스를 해당 요소 안에서 바깥으로 옮겼을 때 발생 한다.

## 키 이벤트 종류

-   keydown : 키를 눌렀을 때 이벤트가 발생
-   keyup : 키를 떼었을 때 이벤트가 발생
-   keypress : 키를 누른 상태에서 이벤트가 발생

## **keydown과 keypress가 같은 기능??**

keypress는 '입력할 수 있는 키보드'를 눌렸을 때에만 반응한다.

예를 들어, 한글 입력, 방향키, DELETE키와 같은 즉시 TEXT에 입력이 반영되는 키보드가 아닌 것에는 이벤트가 반응하지 않는다.

반면에, keydown은 키보드의 어떤 키가 눌러지더라도 반응한다.

## ****폼 이벤트****

-   onfocus : 입력창이 포커스 받을 경우 작동
-   onblur : 입력창 포커스를 잃으면 작동

See the Pen [Untitled](https://codepen.io/handsomegyoungju/pen/ZEwrjJR) by handsomegyoungju ([@handsomegyoungju](https://codepen.io/handsomegyoungju)) on [CodePen](https://codepen.io).

<script src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

-   change : 요소에 값이 변경 되었을 때 이벤트 발생
-   submit : submit 버튼을 눌렀을 때 이벤트 발생
-   reset : reset 버튼을 눌렀을 때 이벤트 발생
-   select : input이난 textarea 요소 안의 텍스트를 드래그하여 선택했을 때 이벤트 발생

## 로드 및 기타 이벤트

-   load : 페이지의 로딩이 완료되었을 때 이벤트 발생
-   abort : 이미지의 로딩이 중단되었을 때 이벤트 발생
-   unload : 페이지가 다른 곳으로 이동될 때 이벤트 발생
-   resize : 요소에 사이즈가 변경되었을 때 이벤트 발생
-   scroll : 스크롤바를 움직였을 때 이벤트 발생