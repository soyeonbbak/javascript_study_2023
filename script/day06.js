//배열과 객체
const array1 = ['html','css','js']
console.log(array1) // 전체 배열 출력 (테스트용 전체정상확인)
console.log(array1[0]) // 개별 배열 직접 출력(이벤트,속성,메소드 동적결과제작시 사용.)
const li = document.querySelectorAll('ul li')
console.log(li) // 전체 정상출력과 인덱스 번호확인등
console.log(li[1]) // 개별출력으로 (이벤트, 속성, 메소드 활용시 사용)
//----------------------객체 이용
//배열은 연관되어있는 2개 이상의 값만(ex: 쇼핑몰옵션에서 size배열, color배열, option배열 등으로 개별 구성)
// => const product_size = ['S','M','L']
// => const product_color = ['white','black','pink']
// 넣어주는 거라면 객체는 2개 이상의 데이터가 속성:값으로 이루어져 있기 때문에 큰 분류만 같다면 다양한 속성을 하나의 객체로 취급할 수 있다.
const cat1 = {
    color:'black',//의미있게 지으면 다 명령어로 사용가능. 속성은 ""사용 안함.
    age:1 // 나이는 숫자니까 ''를 안넣고 사용
}
console.log(cat1)//전체확인
console.log(cat1.color) //객체.속성 개별출력
console.log(cat1.age)
//객체 내 속성값으로 배열 삽입한 경우
const cat2 = {
    color:['white','black','brown'],
    age:2
}
console.log(cat2)
console.log(cat2.color[2])
// --------------

const product = {
    color:['white','black','yellow'],
    size:['S','M','L']
}
console.log(product.color, product.size)
console.log(product.color[0],product.color[1],product.color[2])
console.log(product.size[0],product.size[1],product.size[2])