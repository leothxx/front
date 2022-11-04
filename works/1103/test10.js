'use strict';

//오늘 날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth()+1; // 월(1부터가 아니라, 0부터 생성되기에 기존월보다 1자리 작게 가져온다. 그래서 +1을 더해줘야 정확한 월을 받을 수 있음.)
const date = today.getDate(); // 일
const hour = today.getHours(); // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 시스템 날짜를 가져와서 출력
function dateBring() {
  document.getElementById("startDate").value = yymmdd;
}
// 날짜 비교 함수
function compareDate() {
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  let result; //결과는 변수에 담겠음.

  if(isSameDay(startDate, endDate)) { //리턴값이 trye면
    result = "입력된 날짜는 같습니다."
  }
  else { //리턴값이 false면
    result = "입력된 날짜는 다릅니다."
  }
  document.getElementById("demo").innerHTML = result;
}

// 값을 비교해주는 함수 (연도,월,일을 잘라  === 연산자를 사용하여 비교 하겠음.)
function isSameDay(startDate, endDate){
  return  startDate.getFullYear() === endDate.getFullYear() && //값이 일치하면 trye 일치하지 않으면 false로 리턴함.
          startDate.getMonth() === endDate.getMonth() &&
          startDate.getDate() === endDate.getDate();
}

function compareDate2() {
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  //날짜형식데이터를 시간(1/1000초)로 바꿔서 연산처리한다.
  let elapsedTime = endDate.getTime() - startDate.getTime(); //두번째 날짜 - 첫번째 날짜. (계산은 날짜를 시간 초 단위로 바꿔서 연산처리함.)
  let strDate = elapsedTime / (60*60*24*1000); //1분(60) 1시간(60분) 하루(24시간) [날(day)수로 변경.] //값을 시간으로 받고 싶다면 (60*60*1000) 분으로 받고싶다면 (60*1000) 초로 받고싶다면 (*1000)
  strDate = strDate.toFixed(0); // 소수이하 없애기.
  document.getElementById("demo").innerHTML = strDate;
}

