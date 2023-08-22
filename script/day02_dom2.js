// getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById ('box');
const aTag = document.getElementsByTagName ('a');
const aFirst = document.getElementsByClassName('first');
const aLast = document.getElementsByClassName('last')
console.log(mainTag,hTag[0],contentsCls[0],boxId,aFirst[0],aLast[0]);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
// querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll ('a'); //querySelector만 입력하면 하나만 인식하고 All이라는 키워드를 붙이면 getElement와 같이 모두 불러온다.
const aFirstQ = document.querySelectorAll('.first');
const aLastQ = document.querySelectorAll('.last');
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ, aFirstQ, aLastQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);
console.log(aFirstQ[0], aLastQ[0])
// 가장 첫번째로 있는 a만 읽게됨.