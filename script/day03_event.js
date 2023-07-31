// 1. 변수생성
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const input_id = document.querySelector('#user_id');
console.log(input_id,btn2,btn3, btn4, btn5); //정상확인
// 2. 이벤트 작성
// btn3을 클릭했을 때 경고창 띄우기
// 객체.이벤트리스터('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error')
});
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua';
    //mouseover=마우스가 닿으면 this=btn4. style=스타일바꾸기. backgroundColor=배경색 = '대입값'0
});

btn5.addEventListener('click',function(){
    btn4.style.transform = 'skewX(10deg)';
    btn3.style.backgroundColor='red';
    btn2.innerHTML='결과';
    window.alert('옆에 버튼 색깔이 바뀌었어요!');
});
input_id.addEventListener('focus',function(){
    // 'focus' = 커서를 올려놓고 클릭 할 때.
    this.style.backgroundColor = 'lime';
});
input_id.addEventListener('blur',function(){
    // 'blur' = 커서를 밖에 클릭시.(포커스를 잃었을 때)
    this.style.backgroundColor = 'gray';
});
// 변수.addEventListener('이벤트',function(){실행});
