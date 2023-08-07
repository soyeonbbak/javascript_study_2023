//자주 사용하는 for문
//ES6 이상버전의 DOM을 쉽게 관리할 수 있는 for ~ in ~ of ~ Each. for in, for of, forEach
const study = ['html','css','javascript','design']
//기본 for 문법 for(변수생성; 조건식; 증감식){실행결과}
for(let i=0; i<study.length; i++){
    console.log(`${study[i]}`)
}
//for ~in 문법 = DOM index number 출력
for(let i in study){
    console.log(i)
}
//for~ of 문법 = DOM 자체 출력
for(let i of study){
    console.log(i)
}
let menu = document.querySelectorAll('.box a')
console.log(menu[0],menu[1],menu[2],menu[3],menu[4],menu[5],menu)

for(let i=0; i<menu.length; i++){
    console.log(menu[i])
}
for(let i in menu){
    console.log(i) //DOM index + 기본속성 출력
}
for(let i of menu){
    console.log(i) // DOM 객체출력
    i.addEventListener('mouseover',function(){
        console.log(this) // 현재 대상의 정보를 콘솔에 보여줘라.
        // window.alert('this 는 i입니다.')
        i.style.backgroundColor='pink'
    }) //mouseover
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor='coral'
        i.style.color='white'
        
    })//mouseout end
    i.addEventListener('click',function(){
        window.alert('준비중입니다.')
    }) // event click end
} //for of a end
const num = [20,21,22,23,24,25]
console.log(num)
/* forEach의 기본문법 
    객체.forEach(function(객체매개변수,인덱스매개변수,배열매개변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
    }) 
    * 매개변수명은 의미만 맞게 자유롭게 설정 가능.
    * 매개변수 순서에 따라 객체, 인덱스, 배열 지정이니 순서주의!
    * 매개변수 필요한 대상만 작성 가능.
*/
// num.forEach(function(t, i, a){})
// num.forEach(function(dom, in, ar){})
menu.forEach(function(target, index, array){
    console.log(target)
    console.log(`index=${index}`)
    console.log(`array=${array}`)
    console.log(`array=${array}, index=${index}, target=${target}`)
    console.log('--------------------------------------')
    target.addEventListener('mousedown',function(){ //mousedown => 글자를 누르고 있을 때
        target.style.color='red'
    })
})

//for~in 인덱스 위주 제어
//for~of 객체 위주 제어
//forEach 인덱스, 객체, 배열 동시제어