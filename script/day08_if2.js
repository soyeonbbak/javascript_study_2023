//if 2단, 3단 이상 조건식을 여러개 작성하는 방법
/* 
    else if는 여러개 사용 가능.
    if와 else는 한번만 사용 가능하다.
    if(조건식1){
        조건식1 참일 경우 실행
    }else if(조건식2){
        {모든 조건식이 거짓일 때 실행
    }else if(조건식3){
        조건식1,2가 거짓이고 조건식3이 참일 경우 실행
    }else{
        모든 조건식이 거짓일 때 실행
    }
*/
/* 완전히 다른애들..?
    if(조건식1){참일 때 실행}
    if(조건식2){참일 때 실행}*/
const a = 100 //10도 써보고, 20도 써보면 다른 값이 출력된다.
if(a>0 && a<11){
    console.log('a는 1~10사이 값이다.')
}else if(a>10 && a<51){
    console.log('a는 11~50사이 값이다.')
}else{
    console.log('a는 조건 밖 값을 가지고있다.')
}
// 경품 추첨기
//추첨 번호를 입력받고 추첨번호에 따라 상품이 출력된다.
//1 : 냉장고
//2 : 세탁기
//3 : 컴퓨터
//그 외 모든 숫자는 꽝!
const present = Number(window.prompt('추첨번호는?'))
if(present ===1 ){
    console.log('냉장고')
}else if(present === 2){
    console.log('세탁기')
}else if(present ===3 ){
    console.log('컴퓨터')
}else{
    console.log('꽝')
}