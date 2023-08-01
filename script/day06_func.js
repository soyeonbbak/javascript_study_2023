//함수
//DOM.addEventListener('이벤트',function(){실행결과})
//재사용 하는 문법을 함수.
//필요한 위치에서 호출하면 몇번이든 재사용문법으로 활용
//function 함수명(매개변수){실행명령어; <- 재사용문법으로 활용}
//기본문법
//function 함수명() {재사용문법}
//ex) 자판기 함수 : 무조건 콜라 1개가 나오는 자판기
function japangi(){
    console.log('콜라 1개 나왔습니다.') //결과안나옴. 함수는 생성, 호출을 개별로 진행해야한다. 여기까지 함수 생성.
}
japangi() // 호출.(생성된 함수명 작성.)
const orderBtn = document.querySelector('#order')
console.log(orderBtn)
// DOM 이벤트로 함수 호출 시 함수명만 작성한다.(괄호없이)
// orderBtn.addEventListener('click',japangi)
orderBtn.addEventListener('click',function(){
    console.log('1000원 입금')
    japangi() // 이벤트,함수 생성후 추가 개별 생성시 괄호 입력해야함.
})
//함수 = 재사용되는 js문법을 감싸서 쉽게 호출하는 기능
//매개변수 = 재사용되는 함수 내에 변경되는 데이터가 있을 경우 사용하는 것.
//매개변수 활용한 함수 기본 문법
//function 생성함수명(생성매개변수){재사용문법}
function japangi2(drink){
    console.log(drink+'1개 나왔습니다!')
}
//매개변수가 있는 함수를 호출할 경우 호출함수 괄호안에는 매개변수에 삽입할 데이터를 작성한다.
japangi2('사이다')
japangi2('콜라')

//사이다 1개 나왔습니다.
//콜라 2개 나왔습니다.
//사이다 3개 나왔습니다.
//function 함수명(매개변수,매개변수){}
function japangi3(sprite,num){
    console.log(sprite+num+'개 나왔습니다.')
}
japangi3('사이다',1)
japangi3('콜라',2)
japangi3('사이다',3)
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//4주 자유적금 통장
//초기금액 = 10,000원
//함수 호출 메세지 >> ?원 입금했습니다. 총 잔액은 ?입니다.
let passBook = 10000
function week4Passbook(money){
    // console.log(money+'원 입금했습니다. 총 잔액은'+passBook+money+'원 입니다.') //1000원입금. 총잔액 100001000원
    // console.log(`${money}원 입금했습니다. 총 잔액은${passBook+=money}원 입니다.`)
    passBook += money
    console.log(`${money}원 입금했습니다. 총 잔액은 ${passBook}원 입니다.`)
}
week4Passbook(1000) //1000원 입금했습니다. 총 잔액은 11000원 입니다.
week4Passbook(1000)
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//구구단 2단~9단까지 함수 제작하기
function dan99(num){
    console.log(`${num}x1=${num*1}`)
    console.log(`${num}x2=${num*2}`)
    console.log(`${num}x3=${num*3}`)
    console.log(`${num}x4=${num*4}`)
    console.log(`${num}x5=${num*5}`)
    console.log(`${num}x6=${num*6}`)
    console.log(`${num}x7=${num*7}`)
    console.log(`${num}x8=${num*8}`)
    console.log(`${num}x9=${num*9}`)
    console.log('-----------------')
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)