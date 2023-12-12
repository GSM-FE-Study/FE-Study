# 동적 데이터 수정 시 새로고침 후 toast 띄우기! 신선한 정보 제공과 사용자 피드백.

#### 문제상황

이런 상황이 있지 않으셨나요? 어떤 리스트가 존재할 때에 그 리스트에 수정이 생기는 작업 후 사용자 피드백이 필요한 상황. 이 과정에는 리스트 새로고침도 필요하겠죠?

예를 들면 다음과 같습니다.

한 서비스에 상점이라는 기능이 있고 상점 페이지 접속 시 상점 리스트가 반환됩니다. 유저는 상점 카드를 클릭하여 상품 개수 차감이 가능하죠. 이 경우, 리스트의 상품 개수가 줄어들며 유저는 사용자 피드백과 함께 상품 개수가 줄어든 새로운 상품 리스트를 원할 것입니다.

> 이런 요구사항을 어떻게 구현해야 할까요?

신규 데이터를 받아오는 로직을 구현하는 것이 베스트라고 생각합니다. 아래 방식은 차선책들입니다.

새로운 리스트를 서버에서 받아오는 것은 reload로 해결하고, 사용자 피드백은 어떻게 이루어져야 할까요? toast로 사용자 피드백을 준다고 했을 때 toast를 띄운 직후에 reload가 이루어진다면 실제 사용자에게는 아무 피드백도 오지 않을 것입니다. 그렇다면 reload 후에 어떻게 toast를 띄워야 할까요?

```ts
const {
  mutate: mutateUploadContent,
  isPending,
  isSuccess,
} = usePostContent({
  onSuccess: () => {
    toast.success("성공입니다");
    window.location.reload();
  },
});
```

#### 구상한 방법

#### 1\. n초 후에 reload

사용자 피드백이 선행되고, n초 후에 reload로 새로운 데이터 리스트를 가져옵니다. 지금까지 저는 이런 방식으로 요구사항을 구현하였습니다. 좋은 방법은 아니죠. 하지만 가장 간단하게 구현할 수 있는 방법이라 생각합니다.

```ts
const {
  mutate: mutateUploadContent,
  isPending,
  isSuccess,
} = usePostContent({
  onSuccess: () => {
    toast.success("성공입니다");
    setTimeout(() => window.location.reload(), 3000);
  },
});
```

#### 2\. alert 사용

alert를 사용한다면, 사용자가 확인할 때까지 어플리케이션의 구동이 멈추게 됩니다. 따라서 확실하게 피드백 후에 reload 됩니다.

하지만 이 방법은 UI적으로 너무 별로라고 생각합니다.

```ts
const {
  mutate: mutateUploadContent,
  isPending,
  isSuccess,
} = usePostContent({
  onSuccess: () => {
    alert("성공입니다");
    window.location.reload();
  },
});
```

#### 3\. \[적용한 방법\] reload 후에 사용자 피드백

리스트 수정 이후, 클라이언트에 toast 여부에 대한 flag를 지정합니다. 예를 들면 localstroage와 같은 공간 말입니다. 그렇게 된다면 수정 이후 reload를 하더라도 클라이언트에 정보가 남아있기 때문에 사용자 피드백이 가능합니다.

하지만 localstroage를 이용한다면, 원하지 않는 순간에도 flag가 남아있어 불필요한 사용자 피드백이 발생할지도 모릅니다. 때문에 쿠키에 짧은 만료시간을 지정하여 동적 데이터 수정 이후에만 피드백이 발생하도록 하였습니다.

이렇게 된다면 가장 깔끔하게 요구사항을 만족시킬 수 있다고 생각합니다.

```ts
const {
  mutate: mutateUploadContent,
  isPending,
  isSuccess,
} = usePostContent({
  onSuccess: () => {
    document.cookie = "isSuccess=true; max-age=5";
    window.location.reload();
  },
});
```

```ts
//page
useEffect(() => {
  const isSuccess = isExistCookie("isSuccess");

  if (isSuccess) toast.success("성공입니다");
}, []);
```

쿠키의 key값을 인자로 받아 해당 쿠키가 존재하는지 확인하는 util 함수를 만들어 사용했습니다.

```ts
const isExistCookie = (cookieKey: string) => {
  if (typeof document === "undefined") return false;

  const cookie = document.cookie.split(`${cookieKey}=`)[1];

  if (cookie) {
    const slicedCookie = cookie.slice(0, cookie.indexOf(";"));

    const isExist = slicedCookie.length > 0;

    return isExist;
  }

  return false;
};

export default isExistCookie;
```

### 마치며

신규 데이터를 받아오는 로직을 구현하여 새로고침 없는 신선한 data fetching 하는 것이 최선이겠지만, 빠른 릴리즈를 해야했기 때문에 차선책을 선택하여 요구사항을 구현하였습니다. 앞으로는 최선책을 택할 수 있는 개발자가 되기 위해 노력해야겠습니다.
