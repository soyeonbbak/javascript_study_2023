//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다.
//1.생성 function 함수명(매개변수명){재사용함수문법}
//2.호출 : 함수명()
function func1(str){//접속 회원 맞춤형 인사
    console.log(`${str}님 어서오세요!`)
}
func1('이기철')
func1('qkrthdus06') //호출
//--------------------------
//함수 기능 : 리턴(return) 함수 결과값을 외부로 반환하는 명령. 중~고급 코드사용시 사용빈도가 높다.
//매개변수가 전달받은 값을 함수(외부)로 리턴해라.
function func2(a){
    return a+1 //리턴활용 함수 결과값만 외부로 반환
}
func2(50)
//------여기까지가 메소드없이 값만 내보낸 경우. 함수 결과값을 출력하는 메소드가 없어 출력이 안됨.
console.log(func2(50))//값을 반환해서 출력하겠다.
//함수 결과를 호출앞 메소드에 의해 출력이 된다.
// window.alert(func2(100))
document.write(func2(200))
//-----------------------
function func3(a, b){
    return a*b
}
console.log(func3(10,20))
console.log(func3(2,4))
//---------------------------------
let total = 0
function func4(a){
    total = a
    return total
    total++ //증감연산자를 만나기전에 리턴을 사용해서 증감연산자는 읽히지않아 출력되지 않는다.
    //그래서 주로 return은 마지막에 사용한다. 
}
console.log(func4(10))
// -------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2//10+20 = 30
    num2 = a+b//20제거 => 2+4=6
    num1 += num2//30+6 = 36
    return num1//36 -> 외부반환 출력.
}
console.log(func5(2,4))//함수 호출
// num1= 30
// num2=2+4 = 6
// num1(30) += 6
// return num = 36
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    //'focus' => 커서가 들어갔을때
    bg(txtInput[0],'yellow') //노랑
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1],'blue') //파랑
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2],'pink') //분홍
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target,colors){
    return target.style.backgroundColor = colors
}
console.log(txtInput,'')
//관심상품, 알림설저 이미지에 마우스를 올렸을 때
//off -> on으로 이미지 변경
//마우스를 나갔을 때 on -> off이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg)
likeImg.addEventListener('mouseover',function(){
    // console.log('over')//이벤트 정상확인.
    // likeImg.src = './image/heart_on.png'
    onOff(likeImg,'heart_on')
})
likeImg.addEventListener('mouseout',function(){
    onOff(likeImg,'heart_off')
})
ideaImg.addEventListener('mouseover',function(){
    // ideaImg.src = './image/idea_on.png'
    onOff(ideaImg,'idea_on')
})
ideaImg.addEventListener('mouseout',function(){
    // ideaImg.src = './image/idea_off.png'
    onOff(ideaImg,'idea_off')
})
function onOff(target,imgs){
    return target.src = `./image/${imgs}.png`
}
