// getElement 방식 
const ulWrap = document.getElementById('wrap');
const liTag = document.getElementsByTagName('li');
const aTag = document.getElementsByTagName('a');
// querySelector 방식
const ulWrapQ = document.querySelectorAll('#wrap');
const liTagQ = document.querySelectorAll('li');
const aTagQ = document.querySelectorAll('#wrap a'); 
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)');//querySlelctor만 가능한 방법으로 동일 태그가 많은경우 앞에 부모태그를 입력해도된다.
// 메소드()안에 CSS에서 입력하는 선택자와 똑같이 입력할 수 있다.
console.log(ulWrap, liTag, aTag);
console.log(ulWrapQ, liTagQ, aTagQ);
console.log(liTag[0], liTagQ[1],liTagQ[2],liTagQ[3]);
console.log(aTag[0], aTag[1],aTag[2],aTag[3]);
console.log(liTagQ[0], liTagQ[1],liTagQ[2],liTagQ[3]);
console.log(aTag, aTag[0],aTagQ,aTagQ[0], aTagQ1);
// -------------------------------------------------------
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
console.log('li태그 변수 값은'+liTagQ[0]+'입니다.');
console.log('1+1='+(1+1));
console.log('7X4='+(7*4))
console.log(`1+1=${1+1}`)
console.log(`7X4=${7*4}`)
console.log(`li태그 변수 값은 ${liTagQ[0]}`)