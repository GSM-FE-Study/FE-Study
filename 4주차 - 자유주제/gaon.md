리액트에셔 form(input)을 관리하는 방법은 2가지가 있다

- 제어 컴포넌트 사용
- 비제어 컴포넌트 사용

### 제어 컴포넌트(controlled component)

제어 컴포넌트는 리액트에 의해 값이 관리되는 방식을 말한다  
쉽게 말하자면 리액트의 useState를 사용해 input을 관리하는것을 말한다!

```
const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
```

위의 코드는 inputValue라는 state를 만들어 input을 제어하고있다

### 비제어 컴포넌트(Uncontrolled component)

비제어 컴포넌트는 리액트에 의해 값이 관리되지 않고 DOM에 접근해서 input의 값을 가져오는 방식이다!!!

```
const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const onSubmit = () => console.log(inputRef.current.value);

  return (
      <>
      <input type="text" ref={inputRef} />
      <button onClick={onSubmit} >전송</button>
    </>
  );
};
```

위의 코드를 보면 inputRef라는 Ref를 만들어 input을 참조할수 있도록 하고 있다

### 그래서 뭐가 더 좋냐?

두개의 장단점이 달라 상황에 알맞게 사용하면 될것이다  
제어 컴포넌트는 값이 바뀔때마다 리렌더링되고 실시간으로 값을 확인할수 있다  
하지만 비제어 컴포넌트는 값이 바뀌어도 리덴더링이 되지 않고 제출을 해야지만 값을 확인할수 있다는 장단점이 있다

그래서 나는 오늘 비제어 컴포넌트 방식으로 form을 관리하는 react-hook-form이라는 라이브러리를 소개하려고 한다😎

### react-hook-form

react-hook-form은 비제어 컴포넌트 방식으로 효율적으로 폼을 관리할수 있다!!

- 장점
  - 쉬운 사용법
  - 자동으로 객체 생성
  - 쉬운 유효성 검사

### 사용 해보기

#### install

```
npm install react-hook-form

or

yarn add react-hook-form
```

### 예시 코드

```
import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "@/utils/validation";
import { SignupSubmitType, SignupErrorType } from "@/types/signupFormType";

const Index: React.FC = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignupSubmitType> = (data) => console.log(data);

  const onError: SubmitErrorHandler<SignupErrorType> = (error) =>
    console.log(error);

  return (
    <div>
      form
      <button onClick={handleSubmit(onSubmit, onError)}>fdsfdsfsdfsdf</button>
      <input {...register("name", nameValidation)} placeholder="이름" />
      <input {...register("email", emailValidation)} />
      <input {...register("password", passwordValidation)} />
    </div>
  );
};
```

위의 코드는 내가 간단하게 만든 회원가입 폼이다

#### register : register는 input이나 select tag에 할당해 폼해 등록하게 할수있다

register는 2개 또는 1개의 인자를 받는다

- 첫번째 인자로는 입력을 받을 key의 이름
- 두번째(optional) 인자로는 유효성 검사를 하기 위한 객체를 받는다

#### register로 유효성 검사하기

위에 있는 nameValidation은 유효성 검사 규칙을 지정해 놓은 객체이다

```
const nameValidation = {
  required: true,
  minLength: 2,
  maxLength: 4,
};
```

살펴보면 required는 필수로 입력해야 하는 요소인지를 확인하는 기능, minLength는 최소 길이, maxLength는 최대 길이를 확인하는 기능이다  
이렇게 객체로 유효성 규칙을 지정해 놓으면 알아서 검사를 해주기 때문에 간편하다

---

#### handleSubmit : handleSubmit은 register로 등록한 요소들을 모아 form 객체를 만들어주거나 form 형식에 맞지 않는다면 error를 반환하게 해주는 함수이다

#### 정상적으로 제출이 될때

form이 정상적으로 제출이 되면 handleSubmit가 실행되어 form object가 생성된다

```
{name: '방가온', email: 'abc@abc.com', password: '12345678'}
```

위에 있는 예시 코드에서 제출했을때 성공적으로 제출이 된다면 위에 있는 form object가 생성된다

#### error가 생겼을때

form을 제출 했는데 error가 생긴다면 대부분은 유효성 검사에서 통과를 하지 못했을때 일것이다

유효성 문제로 error를 반환할때는 문제가 된 요소의 name과 문제가 된 유효성 type이 같이 반환된다

```
email: {type: 'pattern', message: 'email 형식을 지켜주세요', ref: input}
```

이런식으로 나온다  
만약 error가 발생했을때 error message도 같이 반환하게 해주고 싶다면

```
{
  required: {
      value: true,
      message: "필수 조건입니다",
    }
}
```

value와 message를 지정해주면 된다

### 마무리

이렇게 form을 관리하는 방법들과 react-hook-form에 대해 알아보았다 react-hook-form은 더 다양한 기능을 제공하고있다  
더 많은 내용은 내가 더 공부한 뒤에 블로그에 추가 하도록 하겠다
