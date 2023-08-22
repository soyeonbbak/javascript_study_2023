//null, undefined 데이터타입 차이
//null == 변수의 값을 삭제할 때 사용
//'' == 빈 문자열은 DOM객체의 문자데이터를 삭제할 때 사용
let a = 10;
console.log(a);
a = null // 빈 값을 대입한다(내용삭제)
console.log(a)
const pwd = document.querySelector('#pwd')//비밀번호 입력칸
const submit = document.querySelector('#submit')//변경버튼
const reset = document.querySelector('#reset')//초기화버츤
console.log(pwd,submit,reset)
//사용자가 비밀번호 입력칸에 비밀번호 입력 후
//submit 버튼 클릭 시 윈도우 팝업창으로 '비밀번호 변경'
//reset 버튼 클릭 시 비밀번호 입력칸 값 초기화(제거)
submit.addEventListener('click',function(){
    window.alert('비밀번호 변경')
})
reset.addEventListener('click',function(){
    pwd.value=a
})
//undefined 정의되지 않은 상태
let b =10;
let c;
console.log(b, c)
console.log(b+c) // NaN(잘못 된 결과 메세지) = Not a Number = 숫자가 아니다. 숫자도아니고 문자도 아님. 계산, 답을 낼 수 없다는 뜻.
//----------------------------------------------------------------
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

let num1 = 10;
num1++;
console.log(num1)
num1--;
console.log(num1++); //출력과 함께하거나 다른 대입과 함께 사용시 
console.log(num1);
//b=++a => b는 증가시킨다 a를. 
//b=a++ => b는 a를 증가시킨다. 다음에. = 일단 a값이 나타나고 후에 출력했을 때 ++로 인해서 +1이 추가되어서 나타난다. 
// *출력 또는 대입연산자와 함께 할 때 전위, 후위 연산자에 따른 결과값이 다르게 출력된다.
// * 출력 예) console.log(num1++).
//*콘솔 로그로 기존 num1의 값을 먼저 전송출력 후 ++증감연산자로 num1의 값을 나중에 1증가한다.
//개별예) num1--
//출력, 대입 관계없이 증감연산자를 개별로 작성한 경우 전위, 후위 연산과 관계없이 무조건 1증가 또는 1감소된다.
let num2 = 5;
let num3 = 0;
console.log(`초기값 num2=${num2},num3=${num3}`);
num3 = num2++;//num2가 따로 뒤늦게 증가??..
console.log(`num2$=${num2},num3=${num3}`);// 6 5
num3=++num2;
console.log(`num2$=${num2},num3=${num3}`);// 7 7
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
let number1=10;
let number2=20;
let result;
number1--;
console.log(number1); // 결과:9
number1++;
console.log(number1); // 결과:10
result=number2++;
console.log(result); // 결과:20
result=++number2;
console.log(result); // 결과:22