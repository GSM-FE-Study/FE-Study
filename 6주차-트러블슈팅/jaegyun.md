트러블슈팅이란??

- 트러블슈팅(troubleshooting)은 문제 해결의 일종으로, 망가진 제품, 또는 기계 시스템의 망가진 프로세스를 수리하는 일에 주로 적용된다.

- 문제 해결을 위해 문제의 원인을 논리적이고 올바르게 찾는 일이며 제품이나 프로세스의 운영을 재개할 수 있게 한다.


제 이야기를 먼저 들려주자면

때는 학교에서 아이디어페스티벌 기간이 끝나고 추가적인 부가기능을 만들고 있었던 상황이였다.

부가기능으로는 학교 급식을 가져오고, 특정 알레르기 성분을 특정스타일로 표시해주는 것이였다.



그 기능을 만들기 위해서는 일단



1. 학교급식 api를 가져오기
2. 학교급식 api에 전달되는 파라미터 값 설정하기
3. 학교급식 api의 데이터를 뽑아, 내가 다루기 쉽게 데이터를 변환 후에, 스타일 값 주기
4. 코드 작성 하기


let year = currentTime.getFullYear();
let month = currentTime.getMonth() + 1;
let date = currentTime.getDate();

const getMealCode = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 19 || currentHour < 8) {
        const tomorrow = new Date(currentTime);
        tomorrow.setDate(currentTime.getDate() + 1);
        year = tomorrow.getFullYear();
        month = tomorrow.getMonth() + 1;
        date = tomorrow.getDate();
        return 1;
    } else if (currentHour < 13) {
        return 2;
    } else {
        return 3;
    }
}

const Api = () => {
    const mealCode = getMealCode();
    const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${key}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=${year}${month}${date}&MMEAL_SC_CODE=${mealCode}`;
    const cleanedURL = URL.replace(/\(\)/g, '');

    axios.get(cleanedURL)
    .then((response) => {
        console.log(response);
        const data = response.data.mealServiceDietInfo[1].row[0];
        setDatas(data);

        const sName = data.SCHUL_NM;
        setName(sName);

        const CAL = data.CAL_INFO;
        setCal(CAL);

        const MENU = data.DDISH_NM; 
        console.log(MENU);
        setMenu(parseMenu(MENU));
            
        console.log(menu);
        console.log(datas);
        })
    .catch((error) => {
        console.log(error);
    })
}

const parseMenu = (menuString) => {
    const menuArray = menuString.split('<br/>'); // <br/> 태그를 기준으로 항목을 분할
    const processedMenu = [];
    
    for (const item of menuArray) {
        const parts = item.split(/\.\.\./); // '...'를 기준으로 항목을 분할
        const menuItem = parts[0].trim(); // 메뉴명
        const menuNumbers = parts[1] ? parts[1].trim() : ''; // 숫자들

        const cleanedMenuItem = menuItem.replace(/\(\)/g, '').trim();

        processedMenu.push({
            name: cleanedMenuItem,
            numbers: menuNumbers
        });
    }
    return processedMenu;
}


몇몇 코드는 삽입하지 않았고 타입스크립트는 아직 완성이 안되서 양해부탁드립니다. ㅠㅠ

조용히 너그러히 넘어가주세요. ㅠㅠ



일단 이 코드를 보면 api를 받고, 그 후에 메뉴를 내가 다루기 편하도록 바꾸고 아직 안나온 코드에 스타일을 적용해주었다.

이 코드는 10월 어느날에 완성이 됬는데, 그때 당시에는 굉장히 잘되어서 기분이 좋았다.



하지만 11월 초반 동아리 시간에 켜보았는데 데이터가 안불러와지는 것이다.

이때 내가 방심했던게 데이터 자체가 안불러져 왔는데 데이터를 다루기 편하도록 바꾸는 과정에서 오류가 있었다고 생각해, 그 부분을 30분 가량 보고 있었던 것이었다.



차근차근 console을 찍어보고, 어떤 부분에서 오류를 찾아야 할까 생각해보니 데이터를 처음 불러올때의 data를 console로

출력해보자는 생각을 해서 실행해보니 나오지 않았다!!



url에 전송된 param을 확인해보니 오류가 날만한 파트를 하나하나씩 확인해보고

하드코딩도 해보았는데 하드코딩을 했더니 오류가 사라진것이다!!



url에 문제가 있다는것을 파악후에 날짜쪽으로 넘어가서 날짜만 console에 출력해보니 그때 당시에 11월 초였으니

11월 0n일 이였을테니 year : 2023,  month : 11, date :  n이런식으로 출력이 됬던것이였다!!

date만 하드코딩해보니 date의 문제가 있다는 것을 확인하고 난 후



- 해결법 : date의 length가 2가 아닐시에 앞에 0을 추가해주도록 하였다.





여기서 나의 트러블슈팅을 정리해보겠다!!


1. 문제정의

    코드가 잘 되는지 동작을 하였다.

    하지만 잘 되지 않아 2번으로 넘겨졌다.



2. 사실수집

    1번의 코드관련 문제가 되자, 관련된 코드에 console.log를 무식하게 계속했다. <- 개선해야 할 점



3. 원인추론

    데이터자체가 안뽑아지는것이 url문제일 수 밖에 없는 코드이니

    url에 관련된 문제를 찾으려 4번으로 넘어갔다.



4. 조사방법 결정

    url관련 문제를 찾자, param관련 문제인지 찾아보고 param관련해서 console을 찍어보았다.

    (가능성 높은 원인 우선 조사 기법)



5. 조사방법 구현

    앞서 결정된 조사방법을 토대로 문제를 해보고 6번으로 넘어갔다.



6. 결과관찰

    console에 출력된 결과를 보니, 출력이 되지 않는 오류를 발견해, 그 결과를 여기에 기록이 된다.

    (만약 이게 안된다면 4번으로 넘어간다.)



7. 문서작성

    문제를 해결한 순서를 조사해 정리한다.

