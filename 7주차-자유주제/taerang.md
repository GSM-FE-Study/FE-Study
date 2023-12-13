개발자들이 개발을 하면서 한 번은 꼭 들어봤을 것 같은 Token에 관한 이야기를 해볼까 한다.  
많은 사용자들이 로그인을 하면 자동으로 로그아웃이 되어 다시 로그인하는 것이 귀찮을 경우도 있을 텐데 그러한 경우에  
accessToken과 refreshToken을 이용해서 보안성과 편한 Token을 유지하는 방법을 조금 알아볼까 한다.

먼저 accessToken과 refreshToken의 개념에 대해서 간단하게 알아보자

## JWT 란

Json Wep Token의 약자로 웹에서 쓰이는 json 토큰이다.
종류는 accessToken, refreshToken 두 가지다.

# ⭐️ AccessToken

- #### 액세스 토큰은 클라이언트가 보호된 자원에 접근할 수 있는 권한
- #### 보통 클라이언트가 성공적으로 인증되고 권한을 얻은 후에 인증 서버에서 발급되는 문자열
- #### 액세스 토큰은 유효 기간이 제한되어 있어 일정 시간 동안만 유효

# ⭐️ RefreshToken

- #### 리프레시 토큰은 주로 장기적으로 사용되는 액세스 토큰을 갱신하기 위해 사용
- #### 액세스 토큰의 유효 기간이 만료되면 리프레시 토큰을 사용하여 새로운 액세스 토큰을 얻음
- #### 리프레시 토큰은 일반적으로 액세스 토큰보다 더 긴 유효 기간을 가지며, 보안 상 주의가 필요하며 <br>리프레시 토큰이 유출되면 오랜 기간 동안 액세스 토큰을 갱신할 수 있기 때문

        accessToken을 발급받고 그다음으로 다시 인증을 할 때 accessToken이 만료가 되었으면
        refreshToken을 발급을 해준다. 그러한 방법 중에서 Cookie, Session, JWT에 대해서 알아볼까 한다.

# 💡 Cookie

Cookie는 Key : Value로 이루어져 있으며 만료시간, 도메인, 경로 등의 정보를 가질 수 있다.  
user가 웹사이트에 방문했을 때 그 사이트가 사용하는 서버를 통해 사용자 로컬에 저장되는 데이터다.

Cookie의 동작 방식

➡️ Browser(사용자)가 Server에 요청  
➡️ Server는 Browser의 요청에 대한 응답할 때 client에서 데이터의 헤더의 Set-Cookie를 담아서 같이 전송  
➡️ Browser에서 Cookie의 데이터 값을 못 받았으면 다음 요청 때 헤더에 Cookie를 보냄  
➡️ Server는 그러한 Cookie를 보고 사용자 식별, 정보를 확인하며 요청을 수행한다.

## Cookie의 단점은?

바로 XSS 공격 ❗️❗️ 즉? 보안에 취약하다. 자세한 내용은 내 블로그 XSS 공격법 참고 ⬇

# 💡 Session

이러한 Cookie의 문제점을 보안하고 더 효율적인 관리를 하기 위해서 Session이라는 개념이 등장하였다.  
바로 local에 저장을 하지 않고 Token을 server에 저장을 하는 것이다.

서버에서는 Session 객체에 Key로 사용하는 Session ID와 그에 해당하는 Value로 저장된다.  
서버의 읽기 속도를 빠르게 하기 위해 서버의 메모리에 저장하기도 하며, 서버의 로컬 파일이나 데이터베이스에 저장하기도 한다.

Session 가장 큰 특징은 사용자가 정보를 가지고 있는 것이 아닌 서버에서 모두 관리한다는 점이다.

➡️ User가 로그인  
➡️ 사용자의 정보를 Session에 저장하고 Session ID를 Browser한테 반환하여 Browser는 그걸 Cookie에 저장  
이때 서버는 Session을 서버 메모리 또는 데이터베이스 등에 저장  
➡️ Browser는 모든 요청에 Session ID를 담아 요청  
➡️ 서버는 Session ID에 기반하여 응답

## Session의 단점은?

Session ID를 통해서 사용자인척 위장이 가능하다는 점  
로그인한 모든 user가 서버에 접근하여 Session 서버에 자원을 사용하기 때문에 서버에 트래픽이 많아져 성능을 저하
