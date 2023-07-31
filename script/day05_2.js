//배열과 객체
const a = 1 // 상수 (변하지 않는 값)
//a =  2 // error (상수값을 변경할 때 에러 발생)
let b = 2 //변수(변할 수 있는 값)
b += 4 // 새로운 값이 대입될 경우 기존값 2가 제거되고 4로 새로 대입
console.log(b)
// 연관된 데이터 2개 이상을 배열로 담을 수 있다.
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log(`오늘은 ${yoil[1]}요일입니다.!`)

const colorArray = ['white','black','yellow','pink','red']
const weatherArreay = ['흐림','맑음','비','눈','태풍']
const color = document.querySelector('.color')
const weather = document.querySelector('.weather')

console.log(colorArray)
console.log(weatherArreay)
console.log(`오늘의 날씨는 ${weatherArreay[0]},${colorArray[3]}입니다.`)
console.log(`오늘의 날씨는 ${weatherArreay[1]},${colorArray[0]}입니다.`)
console.log(`오늘의 날씨는 ${weatherArreay[2]},${colorArray[2]}입니다.`)
console.log(`오늘의 날씨는 ${weatherArreay[3]},${colorArray[1]}입니다.`)
console.log(`오늘의 날씨는 ${weatherArreay[4]},${colorArray[4]}입니다.`)

color.innerHTML=colorArray[2]+','+colorArray[3]+'입니다.'
weather.innerHTML=`${weatherArreay[4]}입니다.`

//사이즈, 색상과 같은 연관되지 않은 데이터를 연속된 배열에 묶어선 안된다.
let optionArray = new Array(4) //빈 배열 4 준비
console.log(optionArray)
optionArray[0] = 'white'//옵션어레이 첫번째자리에 삽입하겠다
optionArray[2] = 'm'
console.log(optionArray) // 나중에 채우는 구조로도 사용함.