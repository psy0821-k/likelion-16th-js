// --------------------------------------------------------------------------
// 실습: 연산자
// --------------------------------------------------------------------------
// * 산술 연산자 (Arithmetic Operators)
// * 할당 연산자 (Assignment Operators)
// * 논리 연산자 (Logical Operators)
// * 비교 연산자 (Comparison Operators)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// [산술 연산] 기본 사칙연산
// --------------------------------------------------------------------------

// 덧셈 (+)
console.log(3+9);
// 뺄셈 (-)
console.log(4-3);
// 곱셈 (*)
console.log(4*5);
// 나눗셈 (/)
console.log(8/5);
// 나머지 (%)
console.log(6%4);

// --------------------------------------------------------------------------
// [산술 연산] 나머지 연산자 활용
// --------------------------------------------------------------------------

// 짝수/홀수 판별
// 나머지 활용하여 1이나오면 홀수 0이 나오면 짝수
console.log(13%2);
// 3의 배수 확인
console.log(9 % 3) // 3의 배수
console.log(13 % 3) // 3의 배수 ❌ 
console.log(27 % 3) // 3의 배수

// 시계 계산 (12시간 형식. 예: 오후 3시)
console.log(10 % 12)
console.log(15 % 12)
console.log(19 % 12)
console.log(21 % 12)


// --------------------------------------------------------------------------
// [산술 연산] 문자열 연결
// --------------------------------------------------------------------------

// 문자열 + 문자열
const firstName = "성윤"
const lastName = "박"
console.log(lastName + firstName);
// 문자열 + 숫자 (숫자가 문자열로 변환됨)
const myFavoritNumber = 7;
console.log(firstName + myFavoritNumber);
// 숫자 + 문자열


// --------------------------------------------------------------------------
// [산술 연산] 거듭제곱
// --------------------------------------------------------------------------

// 거듭제곱 (**)
console.log(2**10);

// 8 (2의 3승)
// 9 (3의 2승)
// 1 (어떤 수의 0승은 1)
// 0.1 (음수 지수)

// Math.pow()와 동일
// 8
console.log(Math.pow(2, 8));
// 9
// 1
// 0.1

// **복리 계산**

// 기본 복리 계산 공식은 $A = P(1 + r)^t$ 입니다.

// - A : 최종 금액 (Amount)
// - P : 원금 (Principal)
// - r : 이자율 (Rate)
// - t : 기간 (Time)

const principal = 1_000_000
const rate = 0.05
const year = 3
const ammount = principal * (1+rate)**year

console.log(ammount);


// --------------------------------------------------------------------------
// 할당 연산자
// --------------------------------------------------------------------------

let x = 10

// 기본 할당
console.log(x);
// 더한 후, 할당
x += 8
console.log(x);
x = x + 8
console.log(x);
// 뺀 후, 할당
x = x - 8
console.log(x);
x -= 8
console.log(x);
// 곱한 후, 할당
x = x * 8
console.log(x);
x *= 8
console.log(x);
// 나눈 후, 할당
x = x / 8
console.log(x);
x /= 8
console.log(x);
// 나머지 후, 할당
x = x % 3
console.log(x);

// 거듭제곱 후, 할당
x = x**100
console.log(x);

// --------------------------------------------------------------------------
// [할당 연산] 점수 누적
// --------------------------------------------------------------------------
let totalScore = 0
// console.log(totalScore)

// [할당 연산] 재고 감소
let stock = 100
// console.log(stock)

// [할당 연산] 가격 인상
let price = 10000
// console.log(price)


// --------------------------------------------------------------------------
// [산술 연산] 증가/감소 연산자
// --------------------------------------------------------------------------

let count = 0

// 후 증가 (Post-increment)
console.log(count++);

// 전 증가 (Pre-increment)
console.log(++count);

// 후 감소 (Post-decrement)
console.log(count--);

// 전 감소 (Pre-decrement)
console.log(--count);


// --------------------------------------------------------------------------
// [논리 연산] AND (&&)
// --------------------------------------------------------------------------

// X && Y (X 그리고 Y)
// 모든 조건이 true여야 true

// 예제: 로그인 & 권한 검증
let is_logged_in = false
let has_permission = false
// 로그인 ❌ 권한 ❌ 출력 결과: false
console.log(is_logged_in && has_permission);

is_logged_in = true
has_permission = false
// 로그인 ✅ 권한 ❌ 출력 결과: false
console.log(is_logged_in && has_permission);
// 로그인 ❌ 권한 ✅ 출력 결과: false

is_logged_in = false
has_permission = true
console.log(is_logged_in && has_permission)

// 로그인 ✅ 권한 ✅ 출력 결과: true
is_logged_in = true
console.log(is_logged_in && has_permission)


// --------------------------------------------------------------------------
// [논리 연산] OR (||)
// --------------------------------------------------------------------------


// X || Y (X 또는 Y)
// 조건 중 하나만 true여도 true

// 예제: 이상형 확인
let is_handsome
let is_rich
// 잘생김 ❌ 부자 ❌ 출력 결과: false
is_handsome = false
is_rich = false

console.log(is_handsome || is_rich);
// 잘생김 ❌ 부자 ✅ 출력 결과: true
is_handsome = false
is_rich = true

console.log(is_handsome || is_rich);
// 잘생김 ✅ 부자 ❌ 출력 결과: true
is_handsome = true
is_rich = false

console.log(is_handsome || is_rich);
// 잘생김 ✅ 부자 ✅ 출력 결과: true
is_handsome = true
is_rich = true

console.log(is_handsome || is_rich);


// --------------------------------------------------------------------------
// [논리 연산] NOT (!)
// --------------------------------------------------------------------------

// 반대로 변환
let truthy = true
// 출력 결과: false
let reverse_truthy = !truthy

console.log(reverse_truthy);


let falsy = false
// 출력 결과: true
let reverse_falsy = !falsy
console.log(reverse_falsy);

// 예제: 로그인 상태 반전
// 출력 결과: is_logged_in 값 반전
let is_logged_out = !is_logged_in
console.log(is_logged_out);

// 이중 부정 (!!) - boolean 변환 (Boolean() 대체)
// '자바스크립트'
console.log(Boolean('자바스크립트'));
// '' 변환 출력 결과: false
console.log(!!(''));
// ' ' 변환 출력 결과: true
console.log(!!' ');
// 0 변환 출력 결과: false
console.log(!!0);
// '0' 변환 출력 결과: true
console.log(!!'0');
// 1 변환 출력 결과: true
console.log(!!1);
// '1' 변환 출력 결과: true
console.log(!!"1");
// null 변환 출력 결과: false
console.log(!!null);
// undefined 변환 출력 결과: false
console.log(!!undefined);

// --------------------------------------------------------------------------
// [비교 연산] 크기 비교
// --------------------------------------------------------------------------

// 숫자 비교
// * 10이 5보다 큼
console.log(10 > 5);
// * 10이 5보다 작지 않음
console.log(10 < 5);
// * 10이 10보다 크거나 같음
console.log(10 >= 10);
// * 10이 5보다 작거나 같지 않음
console.log(10 <= 5);

// 문자열 비교 (사전순)
// * 'a', 'b' 비교
console.log('a' > 'b');
// * 'apple', 'banana' 비교
console.log('apple' < 'banana');
// * 'A', 'a' 비교 (대문자가 소문자보다 작음)
console.log('a' > 'A');

// 문자열과 숫자 비교 (문자열이 숫자로 변환됨)
// * '10'이 5보다 큼
console.log('10' > 5);
// * '100'이 '20'보다 작음 (문자열끼리 비교하면 사전순!)
console.log('100' > '200');


// --------------------------------------------------------------------------
// [비교 연산] 동등 비교 vs 일치 비교
// --------------------------------------------------------------------------
// * == (동등): 값만 비교 (타입 변환 후 비교)
// * === (일치): 타입과 값 모두 비교
console.log(0 == '0');
console.log(0 == Number('0'));
console.log(0 === '0');

// --------------------------------------------------------------------------
// [비교 연산] 불일치 비교
// --------------------------------------------------------------------------
// * != (불일치): 값만 비교
console.log(0 != '0');
// * !== (불일치): 타입과 값 모두 비교
console.log(0 !== '0');


// --------------------------------------------------------------------------
// [논리 연산] 복합 조건
// --------------------------------------------------------------------------

// 예제: 할인 적용 조건
let is_member = true
let purchase_amount = 50000
// 멤버이고 구매 금액이 3만원 이상인 경우, 할인 적용
let has_discount = is_member && purchase_amount >3e4
console.log(has_discount);

// 예제: 접근 권한 조건
let is_admin = false
let is_owner = true
// 관리자이거나 주인인 경우, 접근 허용
let can_access = is_owner || is_admin

// 예제: 신선 유지 온도 조건
let temperature = 25
// 온도가 18도 이상 26도 이하인 경우, 신선 유지
let keep_fresh = 18 <= temperature && temperature <= 26
console.log(keep_fresh);


// --------------------------------------------------------------------------
// 연산자 우선 순위
// --------------------------------------------------------------------------
// 1. 괄호가 최우선

console.log( 3 * (4+3));
// 2. 곱셈/나눗셈이 덧셈/뺄셈보다 우선
console.log( 3 / 4 + 3);
// 3. 왼쪽에서 오른쪽으로
console.log( 3 / 4 * 3);
// 4. 할당은 가장 나중


// --------------------------------------------------------------------------
// 주의사항
// --------------------------------------------------------------------------
// * 문자열 + 숫자 (문자)
console.log(10+"04");
// * 문자열 - 숫자 (숫자)
console.log(10-"04");
// * 문제 해결 방법 (문자 → 숫자 변환 후 연산)
console.log(Number(10) - Number("04"));
// * 증가, 감소 연산자 위치 (전/후)

// Number 은 명시적으로 표현하기 위해 작성한 키워드이다.