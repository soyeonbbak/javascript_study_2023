// day02.js
let a = 10;
let b = 1;
let c = 0;
let d = 5;
console.log (a) ; /* 10 */
a = 30;
b = 2 ;
a = a+b;/* 30+2 */
b = 3 ;
d = 7 ;
c = a+b+c;/* 32+3+0 */
d = a+b+c+d; /* 32+3+35+77 */
console.log(a,b,c);/* 33+3+36 */
console.log(a,b,c,d);/* 33+3+36+59 */
// -----------------------------------
const birth = 20
// birth = 21 /* 상수값 변경 에러 */
console.log('------------');
// 문제1. 다음 회원의 정보를 변수로 처리하시오.
let uName = '홍길동';
let age = 20;
const birthday = '12월';
let address = '인천시 부평구' ;
const blood = 'A형';
console.log('이름 : '+uName);
console.log('나이 : '+age);
console.log('생일 : '+birthday);
console.log('주소 : '+address);
console.log('혈액형 : '+blood);