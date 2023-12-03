# box-sizing

**box-sizing** 은 width 와 height 이 계산되는 방식을 지정한다는 의미이다.

[##_Image|kage@HymwS/btsAjRGHmgw/hJQtZQogRKOgBjePWyFnqk/img.png|CDM|1.3|{"originWidth":714,"originHeight":554,"style":"alignCenter","width":256,"height":199,"filename":"스크린샷 2023-11-13 오후 8.04.59.png"}_##]

### content : 텍스트나 이미지가 들어있는 HTML 요소의 실직적인 내용

### padding : content나 border 사이의 영역으로 즉 안쪽 여백

### border : content를 감싸는 태두리 입니다

### margin : 태두리와 이웃하는 요소 사이의 간격으로 즉 바깥 여백

## Content

-   **width** 값을 이용하여 가로 너비를 지정할 수 있습니다
-   **height** 값을 이용하여 세로 너비를 지정할 수 있습니다

## padding

-   padding 값을 조절하여 안쪽 여백을 지정할 수 있습니다.
-   padding-top, bottom, left, right를 각각 지정할 수 있다.

## margin

-   margin 속성의 html 요소의 바깥 여백을 지정한다.
-   이것 또한 top, bottom, left, right를 각각 지정할 수 있다.

# display

## display : none

: 요소를 렌더링하지 않도록 설정하고 **visibility** 속성을 **hidden**으로 설정한 것과 달리 영역도 차지하지 않는다.

## display : inline

밑줄 등 **글자나 문장에 효과를 주기 위해 존재하는 단위**라고 할 수 있다.

## display : block

:요소를 **block 요소**처럼 표시합니다. 따라서 요소 앞 뒤로 줄바꿈 됩니다.

## display : inline-block

-   줄바꿈이 이루어지지 않는다.
-   block처럼 width와 height를 지정 할 수 있다.
-   만약 width와 height를 지정하지 않을 경우, lnline고 컨텐츠만큼 영역이 잡힌다.

# Flex

**Flex**의 속성은 컨테이너에 적용되는 속성과 아이템에 적용되는 속성으로 나뉨

**justify-content** : 가로선 상에서의 정렬 방식

-   flex-start : 컨테이너의 왼쪽으로 정렬
-   flex-end : 컨테이너의 오른쪽으로 정렬
-   center : 컨테이너의 가운데로 정렬
-   space-between : 요소들 사이에 동일한 간격을 둠
-   space-around : 요소들 주위에 동일한 간격을 둠

**align-ltems** : 세로선 상에서의 정렬 방식

-   flex-start : 컨테이너의 최상단으로 정렬

[##_Image|kage@FTwqL/btsAr3AJDrV/0dkEADSRkkmtg6Yy5SRVa1/img.png|CDM|1.3|{"originWidth":1028,"originHeight":226,"style":"alignCenter","filename":"스크린샷 2023-11-16 오후 2.52.38.png"}_##]

-   flex-end : 컨테이너의 최하단으로 정렬

[##_Image|kage@b7bLQc/btsArn7ggHE/vDLdJygRUiabi5LpTaIBm1/img.png|CDM|1.3|{"originWidth":1128,"originHeight":246,"style":"alignCenter","filename":"스크린샷 2023-11-16 오후 2.53.00.png"}_##]

-   center : 컨테이너의 세로 축의 중앙으로 정렬

[##_Image|kage@bdyyVN/btsAqAy4Q9p/1jGV3HCcRlZ5QxrMxYmJs0/img.png|CDM|1.3|{"originWidth":1080,"originHeight":230,"style":"alignCenter","filename":"스크린샷 2023-11-16 오후 2.53.12.png"}_##]

-   baseline : 요소들을 컨테이너의 시작 위치에 정렬

[##_Image|kage@5bqUn/btsAm0yN6jZ/xlMKBFypUSW7vNcMk5eknk/img.png|CDM|1.3|{"originWidth":1068,"originHeight":234,"style":"alignCenter","width":787,"height":172,"filename":"스크린샷 2023-11-16 오후 2.53.28.png"}_##]

-   stretch : 요소들을 컨테이너에 맞도록 늘림

**Flex-box**

## flex-direction

: flex container 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정합니다.

-   row : 왼쪽에서 오른쪽으로 아이템이 흐르는 가로 방향이다
-   row-reverse : row와 비슷하며 반대로 배치가 된다
-   column : 아이템들이 위에서 아래로 세로 방향으로 배치가 된다.
-   column-reverse : column 과 비슷하며 반대로 배치가 된다.

[##_Image|kage@cQY4cL/btsArygqLFB/I21BVt9X3mmPGDjKqScx1K/img.png|CDM|1.3|{"originWidth":1072,"originHeight":532,"style":"alignCenter","width":743,"height":369,"filename":"스크린샷 2023-11-16 오후 2.56.47.png"}_##]

## flex-wrap

-   nowrap : 기본값이며 줄바꿈을 하지 않고 더 이상 줄어들수 없을 때 container 밖으로 빠져나간다
-   wrap : item의 witdh가 줄어들지 않고 item이 들어갈 공간이 없으면 다음 줄로 이동된다.
-   wrap-reverse : wrap의 역순으로 정리 된다

[##_Image|kage@k4Wll/btsAnCYtdgB/ykER1XJAOtDpNtc6Bb2AZK/img.png|CDM|1.3|{"originWidth":650,"originHeight":708,"style":"alignCenter","width":346,"height":377,"filename":"스크린샷 2023-11-16 오후 2.56.59.png"}_##]

## align-items

: align-items 속성은 콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다.

-   stretch : 요소의 정렬 상태를 기본 값으로 한다
-   center : 요소의 정렬 상태를 가운데로 한다
-   flex-start : 요소의 정렬 상태를 위쪽으로 한다
-   flex-end : 요소의 정렬 상태를 아래쪽으로 한다
-   baseline : 요소의 정렬 상태를 폰트를 기준으로 한다

[##_Image|kage@coh0yd/btsAuQHn0wv/bb0yLirS7dY6kDSE2BGqS1/img.png|CDM|1.3|{"originWidth":1078,"originHeight":1346,"style":"alignCenter","width":476,"height":594,"filename":"스크린샷 2023-11-16 오후 2.57.14.png"}_##]


