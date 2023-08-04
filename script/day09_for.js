// 반복문 for
/* 
    for(반복문변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    } 반복문 변수 조건이 거짓일 때 for 끝나는 위치
*/
//1~10까지 반복하는 반복문
//for에서 자주 이용하는 지역변수명 = i,j,m,n,k
//for(=반복사용문)(let(=변수생성키워드) i=1(=변수명 = 변수값); i<11 (=변수활용조건식. 11보다 작을 때 까지만 실행한다.); i++(=i가 갈수록 증가.))
for(let i=0; i<11; i++){
    console.log('hello js'+(i+1))
}
 //1에서부터 시작하는 것이기 때문에. 한 턴 돌 때마다 1 증가
// -----------------------------
// 0~5 반복문
for(let j=0; j<=5; j++){
    console.log('jungbock'+j)
}
// 5~0 반복문 => 감소버전
for(let i=5; i>=0; i--){
    console.log(i)
}
// 10~30반복문 + 10~30중 홀수만 반복출력
for(let i=10; i<=30; i++){
    if(i%2===1){console.log(i)}
}
// 10~30반복문 + 10~30중 짝수만 반복출력
for(let i=10; i<=30; i++){
    if(i%2===0){console.log(i)}
}
//DOM, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','photoshop','illustrator']
// console.log(study[0])
// console.log(study[1])
// console.log(study[2])
// 객체의 수가 몇개인지 알아내는 속성 = length 속성
//1. html 공부
//2. css 공부
//3. javascript 공부
//4. figma 공부
//5. photoshop 공부
//6. illustrator 공부
for(let i=0; i<=study.length-1; i++){
    console.log([i+1]+'. '+study[i]+'공부')
}
console.log('--------------------------------------')
//위 study 배열을 역순으로 출력하기 . illustrator > html
for(let i=study.length-1; i>=0; i--){
    console.log(`${i}.${study[i]}공부`)
}
console.log('--------------------------------------')
// 반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
// 반복문 이용 coffee배열 모두 출력
for(let i=0; i<=coffee.length-1; i++){
    console.log(coffee[i])
}