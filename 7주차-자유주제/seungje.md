## Husky로 코드 검사를 자동화해 보자! 🐶

코드리뷰를 하다보면 이런 경우가 있지 않나요?

A: 이 부분 린트 적용이 안된 것 같습니다.

B: 네 감사합니다! 적용하겠습니다.

A: 이 부분 테스트 통과가 안된 것 같습니다.

B: 네 감사합니다! 수정하겠습니다.

그런데 이런 것들을 개발자가 이런 정책을 지키는지 여부를 일일이 검사하는 건 리소스 낭비라는 생각이 들지 않나요?

이런 문제를 해결하기 위해 Husky라는 라이브러리가 있습니다.

Husky는 git hook을 관리하기 위한 JS 라이브러리입니다. git add, commit 등의 이벤트가 발생하였을 때에 코드 스타일을 검사하거나, 테스트코드 실행 등의 동작이 가능합니다.

### git hook이란?

git hook은 git 작업중 특정 시점에서 실행되는 사용자 정의 스크립트입니다. git 저장소에서 발생하는 특정 이벤트에 대한 응답으로 스크립트를 실행시킬 수 있습니다.  
git hook은 .git/hooks 디렉토리에 스크립트 파일로 저장됩니다.

Husky와 함께 사용하면 git hook을 편하게 관리할 수 있습니다.  
일반적으로. git 디렉토리는 버전관리 대상이 아니기 때문에 원격 저장소에 올라가지 않아 팀원 간의 공유가 불가능합니다. 하지만 Husky를 사용한다면 git hook 공유가 가능합니다.

### Husky 사용 방법

1\. Husky를 install 합니다.

```
npm install husky --save-dev
```

2\. package.json 스크립트 내에 Husky를 추가합니다.

```
"scripts": {
  "prepare": "husky install"
}
```

3\. git hook을 추가합니다.

생성된 .husky/ 디렉토리 내에 원하는 git hook 스크립트를 추가합니다.

ex. 이런 명령어로 push 하기 전에 lint 검사를 수행하도록 스크립트를 작성할 수 있습니다. 이렇게 명령어를 입력하기 위해선 package.json에 미리 lint라는 동작을 추가해주어야 합니다.

```
npx husky add .husky/pre-commit "npm run lint"
```

명령어를 입력하면 git hook 파일이 생성됩니다.

커밋을 할 때마다 lint가 동작하여 코드를 확인합니다.

명령어에서 사용할 수 있는 hook은 아래와 같습니다.

pre-push로 push 하기 전에 push 하려는 브랜치가 main인지 확인하여 main 브랜치에 push를 막는 등의 활용이 가능합니다.

## 마치며...

평소 eslint로 저장 시 코드 formating이 되도록 하였습니다.  
하지만, 그럼에도 push 후에 lint 관련해서 빌드 에러가 생기면 다시 고쳐서 push 하는 것이 굉장히 귀찮았습니다.  
Husky를 프로젝트에 적용시키면 편리하게 사용할 수 있을 것 같습니다.

## Reference

[가비아 라이브러리IT 콘텐츠 허브library.gabia.com](https://library.gabia.com/contents/8492/)
