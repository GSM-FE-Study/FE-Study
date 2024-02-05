function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
// 차량번호 오름차순으로 청구요금 담아 배열로 리턴

// 청구요금 구하기
// 기본요금 fee[1] + ( 주차시간 - 기본시간fee[0] ) / fee[2] * fee[3]

// 기본시간이내 : 기본요금
// 출차 시간 max = 23:59
// 분 단위는 올림

// 주차시간 구하기
// records.forEach(r => r.split(' ')

// log 객체에 {차번호: 시간} 저장
// IN 이면 + (24시간(분) - 입차시간)
// OUT이면 -(1430 - 출차시간)
// 24시간 = 1440분

// ex) 05:34 (05 * 60) + 34 = 334
