## Web Storage

[##_Image|kage@rd8Y4/btsBMU3zS7K/W6wtgsTyOBhghIksM0pQt1/img.gif|CDM|1.3|{"originWidth":500,"originHeight":262,"style":"alignCenter"}_##]

#### Web Storage는 특정 데이터를 기존에는 서버에 전송해 저장했지만 클라이언트에서도 데이터를 저장할수 있도록 하는 기능이다!(HTML5에서 부터 지원하기 시작했다)

### Web Storage 종류

- Local Storage
- Session Storage

Web Storage의 종류는 두가지가 있는데

Local Storage는 영구 저장소라고 생각하면 되는데 Local Storage에 값을 저장하고 새로고침 하거나 브라우저를 종료해도 Storage에 그대로 남아 있다

Session Storage는 임시 저장소라고 생각하면 되는데 Local Storage처럼 새로고침을 해도 Storage에 남아있다는 공통점이 있지만 브라우저를 종료하면 Storage에 저장되어 있는 데이터들이 초기화 된다는 차이점이 있다

### 사용해보기!

```
// 데이터 삽입하기

localStorage(sessionStorage).setItem("userName", "gaon");
```

값을 삽입할때는 setItem 메서드를 사용하는데 첫번쨰 인자로는 key 두번째 인자로는 값을 넣는 구조로 되어있다  
그리고 만약 똑같은 key로 값을 삽입 한다면 기존의 데이터에 덦어씌어져 값이 삽입된다

```
// 데이터 가져오기

localStorage(sessionStorage).getItem("userName");
```

데이터를 가져올때는 getItem 메서드를 사용하는데 인자로 key를 넣어주면 Storage안에서 key에 맞는 값이 가져와 진다

```
// 데이터 삭제하기

localStorage(sessionStorage).removeItem("userName");
```

데이터를 삭제할때는 removeItem 메서드를 사용한다 인자로는 삭제하고 싶은 값의 key를 넣어 주면 된다

```
// storage 초기화하기

localStorage(sessionStorage).clear();
```

clear 메서드를 사용하면 모든 값을 한꺼번에 삭제 할 수 있다

### 실제 사용하기~

```jsx
interface Props {
  chatList: {
    message: string,
    roomId: string,
    sendDate: string,
    sender: {
      senderName: string,
      senderId: string,
      type: string,
    },
  }[];
}

const ChattingCardList: React.FC<Props> = ({ chatList }) => {
  const navigate = useNavigate();

  const localfFxList = localStorage.getItem("fixList")?.split(",");

  const fixCardList = chatList.filter((chat) =>
    localfFxList?.includes(chat.roomId)
  );

  const notFixCardList = chatList.filter(
    (chat) => !localfFxList?.includes(chat.roomId)
  );

  const handleIconButtonClick = () => navigate("/");
  return (
    <S.Container>
      <S.AbsoluteBox>
        <S.IconButton onClick={handleIconButtonClick}>
          <GoBackIcon />
        </S.IconButton>
        채팅
      </S.AbsoluteBox>
      <S.FixedCardBox>
        {fixCardList.map((chat) => (
          <ChattingCard key={chat.roomId} chat={chat} />
        ))}
      </S.FixedCardBox>
      {notFixCardList.map((chat) => (
        <ChattingCard key={chat.roomId} chat={chat} />
      ))}
    </S.Container>
  );
};

export default ChattingCardList;
```

위의 코드는 내가 지금 하고 있는 프로젝트의 코드인데 Props로 받은 chatList를 안에 있는 요소의 roomId가 Local Storage에 있는 fixList안에 있는지에 따라 구분하여 다르게 사용되는 코드이다!

### 마무리

오늘은 Web Storage에 대해 알아보았다

나는 아직 Session Storage는 사용하지 않았지만 나중에 기회가 된다면 꼭 활용해 볼것이다
