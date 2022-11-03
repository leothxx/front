'use strict';

function regexCheck() {
  // 정규표현식을 만든다.
  const regEx1 = /atom/gm;  //'atom'이라는 문자열이 포함되어 있다면 true , 없으면 false
  const regEx2 = /mbc|kbs|sbs/g; // mbc또는 kbs또는 sbs문구가 하나라도 들어있으면 true, 없다면 false . or는 | 하나만 사용함
  const regEx3 = /홍길(동|순)/g; // '홍길동, 홍길순'이 있는지?
  const regEx4 = /[a-z]/g; //영문 소문자를 포함하고 있는지?
  const regEx5 = /[^a-z]/g; //영문 소문자 외에 다른 문자를 포함하고 있는지? (꺽쇠만 넣어주면 됨)
  const regEx6 = /[A-Z]/g; //영문 대문자를 포함하고 있는지?
  const regEx7 = /[^A-Z]/g; //영문 대문자 외 다른 문자를 포함하고 있는지?
  const regEx8 = /[0-9]/g; //숫자를 포함하고 있는지?
  const regEx9 = /[^0-9]/g; //숫자외 다른 문자를 포함하고 있는지?
  const regEx10 = /[가-힣]/g; // 한글을 포함하고 있는지 ?
  const regEx11 = /[A-Za-z0-9]/g; //영문 대/소문자나 숫자가 포함되어 있는지?
  const regEx12 = /[^A-Za-z0-9]/g; //영문 대/소문자나 숫자외에 다른 포함되어 있는지?
  const regEx13 = /[A-Z]+[a-z]+[0-9]/gm; //영문 대문자나 숫자만 입력을 받는다. +를 넣으면 최소 한개 이상.
  const regEx14 = /\./g; //문자열중에서 .이 있는지?
  const regEx15 = /\d/g; // 숫자를 포함하고 있는지?
  const regEx16 = /\D/g; // 숫자를 포함하지 않고 있는지?
  const regEx17 = /\w/g; // 영문자/숫자/_을 포함하고 있는지?
  const regEx18 = /\W/g; // 영문자/숫자/_을 포함하지 않고 있는지?
  const regEx19 = /\s/g; // 문장안에 공백 또는 탭을 포함하고 있는지?

  // 와일드카드 : 1개글자에 대한 포함 유무(?) , 복수개문자의 포함유무(+,*)
  const regEx20 = /홍길동?안녕/g; // '홍길동'의 '동' 1개 글자의 포함 여부(있어도 되고, 없어도 됨(와일드카드 이기에))
  const regEx21 = /홍길동+안녕/g; // '홍길동'의 '동' 1개이상 글자의 포함 여부(있어도 되고, 없어도 됨(와일드카드 이기에))
  const regEx22 = /홍길동*안녕/g; // '홍길동'의 '동' 0개이상 글자의 포함 여부(있어도 되고, 없어도 됨(와일드카드 이기에)) 
  //d{2,3} , [a-z]{2,20} , [가-힣]{2,20} 2글자에서 20글자까지 
  let content = document.getElementById("content").value;
  if(content.trim() == "") {
    alert("문자열을 입력하세요.");
    return; //리턴에 아무것도 넘어가지 않는다면. false가 들어가게 되어있음. false를 생략해도 default값이 false임.
  }
  // else if(!content.match(regEx1)){
  //   alert("1. atom문자열을 포함하고 있지 않습니다.");
  //   return;
  // }
  // else if(!content.match(regEx2)){
  //   alert("2.mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.");
  //   return;
  // }
  // else if(!content.match(regEx3)){
  //   alert("3.홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다.");
  //   return;
  // }
  // else if(!content.match(regEx4)){
  //   alert("4.영문 소문자를 포함하고 있지 않습니다.");
  //   return;
  // }
  // else if(!content.match(regEx5)){
  //   alert("5.영문 소문자외에 다른 문자를 포함하고 있지 않습니다.");
  //   return;
  // }
  else if(!content.match(regEx14)){
    alert("14.문자열 중 . 포함이 되어 있지 않습니다.");
    return;
  }
  alert("작업 끝!");
  document.getElementById("content").focus();
}
