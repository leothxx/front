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

// 표준 날짜 출력 함수
function fCheck1() {
  let date1 = new Date(); //Java에선 date 객체와 Calendar 객체 총 두개지만, javascript에선 date객체에서 우연하게 대응이 가능함.
  document.getElementById("demo").innerHTML = date1;
}

//편집 날짜 출력 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

//쉬운 날짜 출력 함수
function fCheck3() {
  let str = "";
  str += year + "년 ";
  str += + month + "월 ";
  str += + date + "일 ";
  // 요일 : 0(일),1(월),2(화),3(수),4(목),5(금),6(토)
  // str += today.getDay() + "요일";  //요일을 검색할땐 getDay()
  let week = ["일","월","화","수","목","금","토"]; // 5요일로 나오는 것을 인덱스 0~6에 요일을 배열로 넣고.
  str += week[today.getDay()] + "요일 "; // 배열인덱스값 + 요일로 출력한다. 
  str += hour + "시 ";
  str += minute + "분 ";
  str += second + "초";
  let strDate = str;
  demo.innerHTML = strDate;
}

//시간 출력 함수
function fCheck4() {
  let startDate = today.getTime();
  let lastDate = new Date();
  let elapsedTime = lastDate.getTime() - today.getTime();
  let strDate = elapsedTime / (60*60*24*1000);
  demo.innerHTML = strDate;
}

//해당월의 마지막일자꺼내기 함수
function fCheck5() {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let str = new Date(year,month,0); // new Date(년,월,일,시,분,초); 로 넣는게 기본이며, 년 월 일만 넣어도 괜찮다. [2022,11,0] 0을 넣은 이유는 일자에 0 을 넣으면 해당 월의 마지막 일자를 가져온다.
  let strDate = str.getFullYear() + "년 ";
  strDate += (str.getMonth()+1) + "월 "; 
  strDate += str.getDate() + "일 ";
  strDate += "[해당월의 마지막 일자는? " +str.getDate()+ "]";
  demo.innerHTML = strDate;
}

//해당월마지막일자(yyyy-mm-dd) 꺼내기 함수
function fCheck6() {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  if(month < 10){
    month = "0" + month;
  }
  let str = new Date(year,month,0); // new Date(년,월,일,시,분,초); 로 넣는게 기본이며, 년 월 일만 넣어도 괜찮다. [2022,11,0] 0을 넣은 이유는 일자에 0 을 넣으면 해당 월의 마지막 일자를 가져온다.
  let day = str.getDate();
  if(day < 10){
    day = "0" + day;
  }
  let strDate = year + "-";
  strDate += month + "-"; 
  strDate += day + "";
  strDate += " [해당월의 마지막 일자는? " +day+ "]";
  demo.innerHTML = strDate;
}

//오늘날짜(yyyy-mm-dd) 꺼내기 함수
function fCheck7() {
  let today1 = new Date();
  let year1 = today1.getFullYear(); // 연도 4자리
  let month1 = today1.getMonth()+1; // 월(1부터가 아니라, 0부터 생성되기에 기존월보다 1자리 작게 가져온다. 그래서 +1을 더해줘야 정확한 월을 받을 수 있음.)
  let date1 = today1.getDate(); // 일
  if(month1 < 10){
    month1 = "0"+ month1;
  }
  if(date1 < 10){
    date1 = "0"+ date1;
  }
  let yymmdd1 = year1 + "-" + month1 + "-" + date1;
  demo.innerHTML = yymmdd1;
}

//오늘날짜형식에 맞춰서 출력2(yyyy-mm-dd)
function fCheck8() {
  let strDate = year + "-" + month + "-" +date;
  let fmtDate = strDate.split("-"); //중간에 -를 추가했기에 split으로 -을 없앰.
  let yy = fmtDate[0];
  let mm = ('0'+fmtDate[1]).slice(-2); //0을 앞에 추가하고, 뒤에서 두개를 자름. 5월이면 05 뒤에서 두개자르면 05, 11월이면 011 뒤에서 두개자르면 11 
  let dd = ('0'+fmtDate[2]).slice(-2);
  strDate = yy + "-" + mm + "-" + dd;
  demo.innerHTML = strDate;
}