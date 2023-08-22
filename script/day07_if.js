//전역변수, 지역변수(함수 내/외부 생성한 변수위치 차이)
let b = 20
let c = 30
//전역변수 : 함수 외부에 생성한 변수
function test(){
    let a = 10
    console.log(a+b)
    //지역변수 : 함수 내부에 생성한 변수
}
test()
// console.log(a)
// console.log(a+b)
console.log(b+c)
//전역 변수는 어디서나 사용할 수 있지만 지역변수는 해당 함수(function)내에서만 사용이 가능하다.
//console.log 출력도 함수 내에서 해야만 출력이 가능하고 함수 밖에서 출력확인시 에러가 난다.
console.log('------------------')
//조건문 - 논리데이터 참(true), 거짓(false). 키워드이므로 ""는 사용하지 않는다.
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1==num2)//==비교 연산자. 둘이 다르니 false라고 뜸.
console.log(num1<num2)//true
console.log(num1 == num3)//데이터타입 구분 못함
console.log(num1===num3) // =을 하나 더 추가하면 데이터타입 구분함.
console.log(num1!==num3)//!==은 다르다는 뜻. 데이터타입 구분함. 서로 다르면 true로 나옴.
//조건문
//if(조건식){조건식이 참일 때 실행결과} 조건식종료위치
//상황1. 주말에 '날씨가 좋으면' '등산가자!'
let weather = ['비','맑음','흐림']
if(weather[1]==='맑음'){
    console.log('등산을 가자!')
}
console.log('--------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행1')} // O = d는 true와 같다
if(f>10){console.log('실행2')} //X f는 10보다 크다
if(g<=20){console.log('실행3')} // I g는 20보다 작거나 같다.
if(e!==true){console.log('실행4')} //e는 true가 아니다.
//비교연산자 공부용
console.log('------------------')
//관리자만 접속할 수 있는 페이지
//관리자 아이디일 경우만 접속가능(접속 후 인사말 출력)
// const userId = window.prompt('아이디를 입력하세요.')
// if(userId === 'admin'){window.alert('관리자님 환영합니다.')}
//사용자의 나이를 입력받고 10살 이하라면 '놀이기구 탑승불가'메시지가 나오게 해보자.
// const age = Number(window.prompt('나이를 입력하세요.'))
// if(age<10){
//     window.alert('놀이기구 탑승불가')
// }
const userPrint = window.confirm('인쇄할까요?')
if(userPrint === true){
    window.print()
} 