// --------------------------------------------------------------------------
// 실습: 타입 변환
// --------------------------------------------------------------------------
// * 문자 → 숫자(정수) 변환
// * 문자 → 실수(소수) 변환
// * 숫자 → 문자 변환
// * 숫자 → 불리언 변환
// * 문자 → 불리언 변환
// * 숫자가 아님(NaN)
// * NaN 확인
// * Falsy 값 (6가지)
// * 권장 사항
// --------------------------------------------------------------------------

const LAST_YEAR = "2025년",
  CURRENT_YEAR = "2026",
  NEXT_YEAR = 2027,
  PI = "3.141592",
  RATING = "9.24점";

// --------------------------------------------------------------------------
// 문자 → 숫자(정수) 변환
// --------------------------------------------------------------------------
// * parseInt(str): 정수 변환 (앞에서부터 숫자 추출)
// * Number(str): 순수 숫자 문자열만 변환
// * +str: Number(str)과 동일 결과 출력
// --------------------------------------------------------------------------

// 출력 결과: '2025년' → 2025
console.log(parseInt(LAST_YEAR, 10) + 1)
// 출력 결과: '2026' → 2026

// 사용시 10진수 사용 시 10을 붙여주는것이 좀 더 안전한 코드를 만들 수 있다 
console.log(parseInt(LAST_YEAR, 10) + 15 + "년")
console.log(parseInt("12px", 10) + 20 + "px")

// 명시적 사용
console.log(Number(1274))
console.log(Number("1274년"))
console.log(Number("123.123"))

const n1 = "1274", n2 = "1274년", n3 = "1247.457"
const a1 = "1", a2 = "2", a3 = "3"

console.log(Number(a1) +Number(a2) +Number(a3));
//  권장 X
console.log(+a1 +a2 +a3);
// --------------------------------------------------------------------------
// 문자 → 실수(소수) 변환

console.log(parseFloat("10.1232점"));
// --------------------------------------------------------------------------
// * parseFloat(str): 실수 변환
console.log(parseFloat("10.1232점"));

// --------------------------------------------------------------------------

// 출력 결과: '3.141592' → 3.141592

// 출력 결과: '9.24점' → 9.24

// --------------------------------------------------------------------------
// 숫자 → 문자 변환
// --------------------------------------------------------------------------
// * String(num): 함수
// * num + '': 빈 문자 더하기
// * num.toString(radix?): 메서드 (진법 변환 가능)
// --------------------------------------------------------------------------

// 출력 결과: 2027 → '2027'
console.log(String(NEXT_YEAR));
console.log(NEXT_YEAR+'');
console.log(NEXT_YEAR.toString());

// 출력 결과: 2027 → '2027년'
console.log(NEXT_YEAR+'년') // 추천

// 출력 결과: 255 → '11111111' (2진수)
let myNumber = 255;
console.log(myNumber.toString(2));
// 출력 결과: 255 → 'ff' (16진수)
console.log(myNumber.toString(16));

// 색상값 10진수 -> 16진수
let hexCode = "#"
const red = 255
const blue = 128
const green = 0

const redHexValue = red.toString(16)
console.log(redHexValue);
const greenHexValue = green.toString(16)
console.log(greenHexValue);
const blueHexValue = blue.toString(16).padStart(2,'0')
console.log(blueHexValue);

// 복합 연산자 할당

hexCode += redHexValue
hexCode += greenHexValue
hexCode += blueHexValue

const tempHexCode = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0')
console.log(tempHexCode)

// 다시 10진수로
// 색상 코드(컴퓨터, 16진수) → 색상 값(일상, 10진수) 변환
const redHex = 'ff', greenHex = '80', blueHex = '00'

console.log(parseInt(redHex, 16))
console.log(parseInt(greenHex, 16))
console.log(parseInt(blueHex, 16))
// --------------------------------------------------------------------------
// 숫자 → 불리언 변환
// --------------------------------------------------------------------------
// * Boolean(num): 0은 false, 나머지는 true
// --------------------------------------------------------------------------

// 출력 결과: 0 → false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(""));

// 출력 결과: 1 → true
console.log(Boolean(1));

// 출력 결과: -1 → true
console.log(Boolean(-1));

// 출력 결과: 0.1 → true
console.log(Boolean(0.1));

// 출력 결과: -0.1 → true
console.log(Boolean(-0.1));

// --------------------------------------------------------------------------
// 문자 → 불리언 변환
// --------------------------------------------------------------------------
// * Boolean(str): ''은 false, 나머지는 true
// --------------------------------------------------------------------------

// 출력 결과: '' → false
console.log(Boolean(''));

// 출력 결과: ' ' → true
console.log(Boolean(' '));

// 출력 결과: '0' → true
console.log(Boolean('0'));

// --------------------------------------------------------------------------
// 숫자가 아님(NaN): 숫자 연산 실패 시, 생성
// --------------------------------------------------------------------------
// * Math.sqrt(-1)
// * 숫자 + NaN
// * undefined + undefined
// * 문자를 숫자로 나누기
// * Number(str), parseInt(str), parseFloat(str)
// * 0 / 0
// * Infinity - Infinity
// --------------------------------------------------------------------------

// 출력 결과: Math.sqrt(-1) → NaN
console.log(Math.sqrt(-1));
// 출력 결과: 숫자 + NaN → NaN
console.log(Math.sqrt(-1) + parseFloat("반가워"));

// 출력 결과: undefined + undefined → NaN
let t, u
console.log(t +u);
// 출력 결과: 문자 / 숫자 → NaN
console.log("asv" / 2);
// 출력 결과: Number(str) → NaN
console.log(Number("abc"));
// 출력 결과: parseInt(str) → NaN
console.log(parseInt("abc"));

// 출력 결과: parseFloat(str) → NaN
console.log(parseFloat("누구세용"));
// 출력 결과: 0 / 0 → NaN
console.log(0/0);
// 출력 결과: Infinity - Infinity → NaN
console.log(Infinity - Infinity);

// --------------------------------------------------------------------------
// NaN 확인
// --------------------------------------------------------------------------
// * typeof 연산자 ('number' 반환) ⚠️
// * isNaN(): 타입 변환 후 판단 (부정확) ⚠️
// * Number.isNaN(): 진짜 NaN만 판단 (정확) ✅
// --------------------------------------------------------------------------

// 출력 결과: typeof NaN → 'number' (⚠️ NaN이지만, number 타입으로 인식)

// 출력 결과: isNaN(1) → false (✅ NaN 아님)
// 출력 결과: isNaN('3') → false (✅ NaN 아님)

// 출력 결과: isNaN([]) → false (✅ NaN 아님)

// 출력 결과: isNaN(null) → false (✅ NaN 아님)

// 출력 결과: isNaN(NaN) → true (✅ NaN 맞음)
console.log(isNaN(NaN));

// 출력 결과: isNaN('3n') → true (⚠️ NaN 맞음? 부정확한 이유: 타입 변환 후, 검사)
console.log(isNaN('3n'));

// 출력 결과: isNaN(undefined) → true (⚠️ NaN 맞음?)
console.log(isNaN(undefined));

// 출력 결과: isNaN({}) → true (⚠️ NaN 맞음?)
console.log(isNaN({}));

// 출력 결과: Number.isNaN('3n') → false (✅ NaN 아님, 정확한 이유: 타입 변환 없이 검사)
console.log(Number.isNaN('3n'));

// 출력 결과: Number.isNaN(undefined) → false (✅ NaN 아님)
console.log(Number.isNaN(undefined));

// 출력 결과: Number.isNaN({}) → false (✅ NaN 아님)
console.log(Number.isNaN({}));

// --------------------------------------------------------------------------
// Falsy & Truthy
// --------------------------------------------------------------------------
// 유효성 검사 시 
// * Falsy 값 (6가지): 0, '', false, null, undefined, NaN
// * 나머지 값은 모두 Truthy
// --------------------------------------------------------------------------

// 출력 결과: 0 → false
console.log(!!0);
// 출력 결과: '' → false
console.log(!!'');

// 출력 결과: false → false
console.log(false);

// 출력 결과: null → false
console.log(!!null);

// 출력 결과: undefined → false
console.log(!!undefined);

// 출력 결과: NaN → false
console.log(!!NaN);

// --------------------------------------------------------------------------
// 권장 사항
// --------------------------------------------------------------------------
// * 문자 변환: String() 또는 toString()
// * 숫자 변환: Number() 또는 parseInt()/parseFloat()
// * NaN 확인: Number.isNaN() 사용
// --------------------------------------------------------------------------


// const nextYear = prompt('내년 연도를 입력해주세요.', '2026')
// console.log(Number(nextYear) + 1 + '년')