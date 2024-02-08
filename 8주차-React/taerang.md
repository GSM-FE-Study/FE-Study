요즘에는 앱 개발을 React Native를 통해서 하는 개발자들도 많이 나타나고 있는데 이러한 React Native는  
어떻게 사용하고 어떤 장점과 단점을 가지고 있으며 앞으로의 전망에 대해서 궁금해서 이 블로그를 작성을 한다.

## React Native란 무엇일까?

JavaScript와 React를 기반으로 하는 크로스 플랫폼 모바일 애플리케이션 개발을 위한 프레임워크이다.  
IOS와 AOS에서 동작하는 네이티브 모바일 앱을 만들 수 있다. React Native는 사용자 인터페이스를 만드는 facebook  
라이브러리 리액트를 기반이지만 모바일을 중점으로 두고 있다. 즉 웹 개발자가 쉽게 접할 수 있는 장점을 가지고 있다는 것이다.

## **React Native의 장점은 무엇일까?**

### 1. 커닝 커브가 낮다.

리액트 네이티브의 가장 큰 장점은 이러한 앱을 만들기 위해서 많은 언어를 학습하지 않아도 된다는 점이다.  
물론 React 기반이기에 Javascript를 사용하지 않고 웹 개발을 하는 개발자라면 다르지만, 전반적인 프론트, 백엔드  
개발자들은 바로 앱 개발을 해볼 수 있다는 것이다. Javascript 기반이기에 Flutter - Dart, 자만리 - C# 보다는 비교적  
진입 장벽이 낮습니다.

### 2. 소스 코드와 재사용과 생산성이 용이하다.

앞서 이야기 했드시 페이스북에서 파생이 되었기 때문에 컴포넌트 구조로 분리하여서 관리할 수 있다는 장점이 있습니다.  
또 기존에 리액트로 개발이 된 사이트가 있다면 그 사이트의 컴포넌트 구조를 그대로 사용이 가능하기에 재사용성이  
뛰어납니다. 그리하여 생산성도 효율적으로 높이 올라갈 수 있다는 것입니다.

### 3. 오픈 소스와 비용

하나의 언어와 코드로 두 개의 OS 앱을 개발을 할 수 있기 때문에 일반적인 네이티브 앱을 개발하는 것보다는 2배 더

비용이 저렴합니다. 일반적인 네이티브 앱 개발자보다는 Javascript를 다룰 수 있는 개발자가 비교적 많아 쉽게 배우고  
고용하기 좋습니다. 또 코드 하나의 집중적으로 유지보수하기에 유지 비용도 적게 듭니다. React Native는 오픈 소스  
커뮤니티가 활발하게 활성화가 되어 있고 많은 블로그를 통해서 정보를 찾아볼 수도 있습니다. 오픈 소소의 장점으로
자료를 통한 생산성을 증대시키고 비용을 절약할 수 있습니다.

## **React Native의 단점은 무엇일까?**

### 1. 러닝 커브

엥? 아까는 위에서 러닝 커브가 장점이라면서 왜 단점이라고 하지??
당연한 말입니다.
기존에 OS 네이티브 앱을 개발하던 개발자는 새로운 언어인 Javascript를 반드시 학습을 해야 합니다.  또 리액트를
접하지 않은 개발자들은 새로운 개념인 jsx의 리액트 고유 방식에 대해서 학습을 따로 하고 리액트에서 사용하는 여러
개념인 props, state 등의 개발 방식에 대해서 학습하고 숙지를 하고 있어야 하기에 러닝 커브는 장점이나 단점이라고
할 수 있습니다.

### 2. 네이티브보다 성능 ⬇️

React Native는 추가적인 레이어가 존재하기 때문에 디버깅이 쉽지가 않다. 특히 리액트와 특정한 플랫폼 사이에
발생하는 문제의 디버깅일 수도 더욱더 이다. 예를 들어서 어떠한 플랫폼에 새로운 버전이나, 환경이 생겼을 때
React Native는 다른 OS Native보다 지원하기까지의 시간이 오래 걸린다. 또 기능적인 면에서는 일반적인 플랫폼을
만든다고 했을 때 문제는 없지만, 애니메이션을 구현하고 60 프레임 이상을 사용하게 될 경우에는 js thread에서
약 5ms보다 시간이 더 걸려 성능 저하를 겪을 수 있습니다.

#### **내가 생각하는 React Native의 생각**

내가 생각하기로는 지금 내가 웹 프론트로 공부를 하고 있고 또 js를 사용하고 있다면 한 번은 꼭 해보면 좋을 것 같다.  
하지만 내가 굳이 지금 OS Native를 공부하고 있고 Javascript에 대한 이해도를 가지고 있지 않다면 Flutter나
현재 하고 있는 Native를 계속 하는 것이 좋을 것 같다. 처음 접하는 언어나 개념인 만큼 준비 기간도 정말 길 것이고,
학습할 내용도 많기 때문에 바로 적용하기에는 힘들 것 같다고 생각이 든다.

### **그럼 어떻게 사용을 할까?**

```jsx
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hi}>안녕</Text>
        <Text style={styles.name}>나는</Text>
        <Text style={styles.introduce}>리액트 네이티브 개발자!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hi: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 10,
  },
  introduce: {
    fontSize: 16,
    color: "#3498db",
  },
});

export default App;
```

###

**추천하는 강의**

**토스ㅣSLASH 23 - 달리는 토스 앱에 React Native 엔진 더하기**

<iframe src="https://www.youtube.com/embed/6H9WQDRFZYg" width="860" height="484" frameborder="0" allowfullscreen="true"></iframe>

**토스ㅣSLASH 22 - 미친 생산성을 위한 React Native**

<iframe src="https://www.youtube.com/embed/b_6CjuvVg8o" width="860" height="484" frameborder="0" allowfullscreen="true"></iframe>
