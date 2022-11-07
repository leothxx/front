'use strict';

//클래스 만들기
class Member {

  //생성자
  constructor(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
  }

  // getters 생성
  get name(){
    return this._name;
  }
  get age(){
    return this._age;
  }
  get color() {
    return this._color;
  }

  set name(name) {
    this._name = name;
  }
  set age(age) {
    this._age = (age < 1) ? age * (-1) : age;
  }
  set color(color) {
    this._color = (color == '껌정' || color == '블랙' || color == '흑색' || color == '까망' || color == '깜정')? '검정' : color; // 혹은 if문 사용 가능
  }

  //메소드
  memberPrint() {
    console.log("성명 : " +this.name + ", 나이 : "+this.age+ ", 색상 : "+this.color);
  }
}