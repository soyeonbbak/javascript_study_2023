// dom == document object model
// 자바스크립트 = 객체지향언어
// bom = browser object model = 웹 브라우저의 기본 객체
let hello = 'hello js';
// window.alert(hello)
// let qa = window.prompt('1+1');
// window.alert('정답은' +qa+'입니다.');
// let ox = window.confirm('자바스크립트는 객체지향언어다.');
// window.alert(ox);
// 참 , 거짓으로 결과를 나눠서 보여준다. 확인 = true(참) / 취소=fales(거짓)

// 객체.속성
// 객체.메소드()
// 객체.속성.메소드()
// 아이디 객체 변수 대입하기
// 변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1');
const login = document.getElementById ('login')
const pay = document.getElementById ('pay')
const price = document.getElementById ('price')
// 변수명과 대입객체문법 안에 내용은 동일하지않아도된다.
console.log(btn1,login,pay,price);
btn1.style.color = 'red';
// 태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
// const a1 = document.getElementsByTagName('a1');
// const a2 = document.getElementsByTagName('a2');
// const a3 = document.getElementsByTagName('a3');
console.log(header);
console.log(h1);
console.log(nav);
console.log(aTag[1]);

// innerHTML 속성 활용
// 객체. 속성 //읽기
// 객체. 속성 = 대입값 // 수정or삭제
console.log(header.innerHTML) //undefined
console.log(header[0].innerHTML) ; //자식,자손읽기
console.log(h1[0].innerHTML);
// class와 id 일 때만 주의
//innerHTML = 앞에 넣은 객체의 내용을 읽겠다.
// console.log(first.innerHTML);
// console.log(li[1].innerHTML);
console.log(btn1.innerHTML);
btn1.innerHTML = '버튼'
console.log(login.innerHTML);
login.innerHTML = '결제취소';
console.log(pay.innerHTML);
// console.log(last.innerHTML);
// console.log(ul[0].innerHTML);
console.log(aTag.innerHTML);
aTag[2].innerHTML='';//빈문자열 == 문자열을 비운다.(삭제)


// 클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const last = document.getElementsByClassName('last')[0];
console.log(li_first,li_second,last);
console.log(li_first[0]);
// console.log(li_first[1]);
// last.style.color = 'pink';


// const login = document.getElementById('login');
// console.log(login);
// login.style.color = 'blue' ;

// const pay = document.getElementById('pay')
// console.log(pay)
// pay.style.color = 'green';

// const price = document.getElementById('price')
// console.log(price)
// price.style.color = 'purple';

nav[0].style.backgroundColor = 'aqua';
nav[0].style.border = '5px solid black';
login.style.transform = 'translate(50px)';
btn1.style.opacity = '30%'
pay.style.background = 'linear-gradient(90deg,red,green,blue,black)'