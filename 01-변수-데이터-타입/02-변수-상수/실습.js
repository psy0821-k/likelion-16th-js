// --------------------------------------------------------------------------
// 실습: 변수와 상수
// --------------------------------------------------------------------------
// * 변수 및 상수를 선언하고 콘솔 패널에 출력
//   - var, let / const
//   - 변수는 값을 다시 할당할 수 있음
//   - 변수는 값 할당 없이, 선언만 가능
//   - 상수는 값을 다시 할당할 수 없음
//   - 상수는 선언과 할당이 모두 필요
//   - 변수, 상수 모두 여러 개를 동시 선언 가능
// * 변수 이름 작성 규칙
//   - 문자, 숫자, 기호(_, $)만 사용 가능
//   - 숫자로 시작할 수 없음

let cross_meter
let fontSize
let px2rem
let _private
let $dollor

// * 변수 이름 작성 형식
// 소문자 (lowercase) - 간단한 변수
let email

// 대문자 (UPPERCASE) - 상수(constant)
let ADMINISTRATOR
let BONUS_POINT = 100

// 스네이크 케이스 (snake_case) - 상수인 변수 이름 권장
let margin_block_start
let user_email
let user_password

// 카멜 케이스 (camelCase) - 변수 또는 함수 이름 권장
let paddingInlineEnd
let useName, getTotalPrice

// 파스칼 케이스 (PascalCase) - 클래스, 생성자
let SuperMario, User, ShoppingCart
// 케밥은 안됨 ❌ 에러 발생!

// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// let을 사용한 변수 선언
// --------------------------------------------------------------------------

// 변수 선언과 동시에 값 할당(한글 권장 X)
let 가지고_있는_사과_수
let 추가_있는_사과_수
let initialApples = 4
let init_apple_count = 27

console.log('가지고 있는 사과 개수 : ',initialApples)
console.log('추가구매한 사과 개수 : ',init_apple_count)

let truthy = true
let falsy = false
let yes = true
let no = false
let 할게요 = true
let 안할게요 = false

console.log('truthy: ', truthy)
console.log('falsy: ', falsy)
console.log('yes: ', yes)
console.log('no: ', no)
console.log('할게요: ', 할게요)
console.log('안할게요: ', 안할게요)

// 변수 값 재할당 가능
truthy = false
console.log('재할당 truthy: ', truthy)
// 선언만 하고 나중에 할당
let gamePlayer
gamePlayer = "라모스"
console.log(gamePlayer)

// 여러 변수 동시 선언
let screen_width = 290, screen_hieght = 842
console.log("screen_width", screen_width)
console.log("screen_hieght", screen_hieght)

// 여러 변수 선언만 (값 없이)
let x,y
x= 10
y=20

console.log("x:",x ,"y:", y)
// --------------------------------------------------------------------------
// const를 사용한 상수 
const ADMIN_KEY = "bxcz2131asvc123adfc"
// --------------------------------------------------------------------------
// 상수 선언과 동시에 값 할당 (필수!)


// 상수는 재할당 불가능
// ❌ 에러 발생! TypeError: Assignment to constant variable.

// 상수는 선언과 동시에 할당 필수
// ❌ 에러 발생! SyntaxError: Missing initializer

// 여러 상수 동시 선언

// --------------------------------------------------------------------------
// var를 사용한 변수 선언 (사용 권장 안함)
// --------------------------------------------------------------------------

// var 변수 선언
var incrementCount = 9;
var incrementCount = 3;

// var는 재선언 가능 (문제가 될 수 있음)
// ✅ 에러 없음 (하지만 위험!)

// let은 재선언 불가능
// ❌ 에러 발생! SyntaxError

// --------------------------------------------------------------------------
// 변수 이름 작성 규칙
// --------------------------------------------------------------------------

// ✅ 올바른 변수 이름

// ❌ 잘못된 변수 이름 (주석 처리)
// * 숫자로 시작 불가
// * 하이픈(-) 사용 불가
// * 공백 사용 불가
// * 예약어 사용 불가
// * 예약어 사용 불가

// --------------------------------------------------------------------------
// 변수 이름 작성 형식 (네이밍 컨벤션: Naming Convention)
// --------------------------------------------------------------------------

// 소문자 (lowercase) - 간단한 변수

// 대문자 (UPPERCASE) - 상수

// 스네이크 케이스 (snake_case) - 변수 이름 권장

// 카멜 케이스 (camelCase) - 변수 또는 함수 이름 권장

// 파스칼 케이스 (PascalCase) - 클래스, 생성자

// 케밥 케이스 (kebab-case) - JavaScript에서 사용 불가 ❌

// --------------------------------------------------------------------------
// 사용자 정보 관리
// --------------------------------------------------------------------------

// 사용자 기본 정보 (let 사용 - 변경 가능)
{
// * 이름
let userName = "성윤";

// * 나이
let userAge = 29;

// * 이메일
let userEmail = "abc1234@gmail.com"

console.log("변경 전 : ", userName, userAge, userEmail);
// 정보 업데이트
userName = "짱구";
userAge = 5;
userEmail = "leaf1234@gmail.com"

console.log("변경 후 : ", userName, userAge, userEmail);
}
// 시스템 설정 (const 사용 - 변경 불가)
// * 시스템 이름
const SYSTEM_NAME = "window"
// * 시스템 버전
const SYSTEM_VERSION = "15.6.2"
// * 최대 로그인 시도 횟수
const MAX_LOGIN_ATTEMPTS = 5;
// * 세션 타임아웃
const SESSION_TIMEOUT = 3000 //3s
// --------------------------------------------------------------------------
// 쇼핑몰 상품 관리
// --------------------------------------------------------------------------

// 상품 정보 (변경 가능한 변수)
// * 상품 이름
let productName = '노트북'
// * 상품 가격
let productPrice = 90_000
// * 상품 재고
let productInventory = 100
// * 상품 카테고리
let productCategory = '디지털 기기'

// 시스템 상수 (변경 불가)
// * 부가세 10%
const SURTAX = 0.1;
// * 무료배송 기준 40,000원
const SHIPPING_FREE = 40_000
// * 최소 주문 금액 10,000원
const MIN_ORDERED_AMOUNT = 10_000
// --------------------------------------------------------------------------
// let vs const 선택 가이드
// --------------------------------------------------------------------------

// const 사용
// 변경할 필요 없는 값
const USER_SECRET_KEY ="12312321"

// let 사용
// 값이 변경될 수 있는 값
let babyName = "짱아"

// --------------------------------------------------------------------------
// 실습 문제
// --------------------------------------------------------------------------

// 문제 1: 학생 정보를 저장하는 변수를 만드세요.
// - 이름 (변경 가능)
let studentName = "성윤"
// - 학년 (변경 가능)
let studentGrade = "졸업"
// - 학번 (변경 불가)
const STUDENT_NUMBER = "21725732"
// - 학교 이름 (변경 불가)
const SCHOOL_NAME = "대구대학교"

// 문제 2: 도서관 책 정보를 저장하는 변수를 만드세요.
// - 책 제목 (변경 불가)
const BOOK_NAME = '짱구는 못말려'
// - 저자 (변경 불가)
const AUTHOR = "신형만"
// - 대출 가능 여부 (변경 가능)
let loanAvailability = true
// - 대출 횟수 (변경 가능)
let numberOfLaons = 3;
// 문제 3: 온라인 쇼핑몰 장바구니를 만드세요.
// - 상품명 (변경 불가)
const PRODUCT_NAME = 'BMW'
// - 가격 (변경 불가)
const PRODUCT_PRICE = 10_000_000
// - 수량 (변경 가능)
let carQuantify  = 100;
// - 총 금액 (변경 가능)
let totalPrice = 1_000_000_000 
// --------------------------------------------------------------------------
// 요약 및 베스트 프랙티스
// --------------------------------------------------------------------------

/*
✅ let vs const 선택 가이드
1. 기본적으로 const 사용 (변경하지 않을 값)
2. 값이 변경되어야 할 때만 let 사용
3. var는 사용하지 않기 (구식, 문제 많음)

✅ 변수 이름 규칙
1. 의미 있는 이름 사용 (x, y 대신 user_name, totalPrice)
2. 카멜케이스 사용 (JavaScript 표준)
3. 상수는 대문자와 언더스코어 (MAX_COUNT, API_KEY)
4. 숫자로 시작 불가
5. 예약어 사용 불가

✅ 좋은 예시
const MAX_USERS = 100
const API_URL = 'https://api.example.com'
let current_user = 'hong@89'
let itemCount = 0

❌ 나쁜 예시
var x = 100               // 의미 없는 이름, var 사용
let user-name = 'hong@89' // 케밥케이스 사용 불가
let 1user = 'kim'         // 숫자로 시작 불가
*/
