많은 신입 개발자, 또는 개발자가 사용하는 버전관리인 git은 많은 사람들이 알고 있을 것이다.  
하지만 생각 외로 Git과 GitHub의 차이를 잘 모르고 있는 사람이 되게 많은데 그 내용을 조금 다뤄볼까 한다.

## **⭐️ git**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcrSqvJ%2FbtsAD2Iod0G%2FoE6XZNOVuktBNhonNq45sK%2Fimg.png" alt="image">

먼저 git이다.

쉽게 이야기를 하자면 버전관리 소프트웨어이다.   
예시를 하나 들어보자 내가 프로젝트를 하고 있다가 어떠한 실수를 했을 때 이전 버전으로 롤백을 해야 할 경우가 생기는데  
그러한 상황에서 사용할 수 있는 방법 중 하나가 git이다. git은 개인 컴퓨터에서 돌아가는 Version Control System이다.  
git을 사용하기 위해서는 개인 계정을 등록한 필요도 없고 인터넷을 연결을 하지 않아도 된다는 장점이 있다. 하지만 GitHub를 사용을  
한다면 회사에서 운영하고 회사에서 서비스 중인 서버에 올라간 Git이기 때문에 개인 계정과 인터넷이 필요하다.

### 즉 정리를 해서 간단하게 이야기를 하자면

- ##### 오픈 소스 버전 관리 시스템
- ##### 로컬에서 버전 관리
- ##### 소프트웨어 개발 및 소스 코드 관리에 사용
<br>

**내가 자주 사용하는 git 명령어 소개**

```
git add .
//현재 directory 의 모든 파일을 Staging Area 로 이동

git status
//file 들의 tracking 상태 보기

git commit -m "message"
//Staging의 파일들 commit 하기

git push
//저장소에 commit 반영하기

git pull
//저장소에서 commit 가지고 오기 (원격)

git merge origin/{branch name}
//특정 branch 병합
```

**사용자 이름, 이메일 입력**

```
git config --global user.name “[firstname lastname]”
git config --global user.email “[valid-email]”
```

## **⭐️ GitHub**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJGpg%2FbtsAw84rUns%2FeK2jGccuvLQVa7bhwzaAMK%2Fimg.png" alt="image">

다음으로는 GitHub이다.  
GitHub는 git을 사용하는 프로젝트를 지원하는 웹 호스팅 서비스이다.  
git에서는 프로그램의 버전을 관리하였지만 Git은 로컬 저장소에서 작동하기에 다른 개발자와 협업을 하고 작업을 하기에 어렵다.  
이러한 경우 GitHub를 사용하여서 웹 상에서 클라우드 서버를 통한 로컬 저장소의 코드를 업로드하고 공유할 수 있다.  
그리하여 내 작업물을 다른 개발자에게 공유하고, 반대로 다른 개발자가 내 작업물을 받아서 작업을 할 수 있다.

### 즉 정리를 해서 간단하게 이야기를 하자면

- ##### Git Repo를 위한 웹 기반 호스팅 서비스
- ##### 클라우드 서버를 사용해서 로컬에서 버전 관리한 소스코드를 업로드하여 공유
- ##### 분산 버전 제어, 액세스 제어, 소스 코드 관리, 버그 추적, 기능 요청, 작업 관리를 제공
<br>

### 결국에는 Git은 버전관리 프로그램이고 GitHub는 버전 관리, 소스 코드 공유, 분산 버전 제어 등등이 가능한 원격 저장소이다.

### **마치며**

결국 처음으로 이러한 내용을 접하게 된 개발자나 소프트웨어 엔지니어들이 잘 모를 수 있는 내용이라고 생각을 한다.  
이제 개발을 시작한 지 1년이 다 된 나 조차도 최근에 정확하게 알게 된 내용이라고 할 수 있다. 내가 작성한 블로그를 보면서  
Git과 GitHub 개념에 관하여 조금 관심을 가지고 다른 블로그나 자료를 통해서 더욱더 많은 정보를 얻길 바란다.
