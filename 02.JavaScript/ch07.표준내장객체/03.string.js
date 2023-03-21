// String 객체
let stringFromLieral = '안녕하세요?';
let stringFromConstructor =new String('안녕하세요?');

//속성
console.log(stringFromLieral.length);

//메소드
let str = '안녕하세요?';
console.log(str[0], str.charAt(0));
console.log(str.concat('여러분'));           //안녕하세요 + 여러분
console.log(str.indexOf('하'));

//디지털 시계, 00:00 ~ 23:59
//하루동안 3이 표시되는 시간은 몇초인가?
let totalSecond = 0;
for(let H = 0; H <24; H++) {
    for(let m = 0; m < 60; m++) {
       let disply = H + ':' + m;
        if(disply.indexOf('3')>=0) 
        totalSecond+=60;
}
}
console.log(totalSecond)

console.log('pineapple'.lastIndexOf('p'));

//정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brwon fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를 ㅋㅋ';

let newStr = sample.replace('A', 'a');
console.log(newStr);

newStr = sample.replace(/[A-Z]/, '대');       //한개만 바꿈
console.log(newStr);
newStr = sample.replace(/[A-Z]/g, '대');      //모두 바꿈
console.log(newStr);

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);
// 한글과 공백만 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
console.log(newStr);

//문자열을 분리하여 배열을 반환
let fruitString = '사과, 배, 감, 포도';
let fruitArray = fruitString.split(',');
console.log(fruitArray);

// 문자열 일부분
const today = new Date().toISOString();
console.log(today);

console.log(today.substring(0, 10));
console.log(today.substring(11, 19));
console.log(new Date().getHours());

//YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
   return (num < 10)? '0' + num : String(num);
}
function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())}`+
    `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}


let now = myDatetime();
console.log(now);
console.log(now.substring(2));

console.log(' hello '.trim());

console.log('33'.split('3').length);
// 1에서 1000까지 숫자가 있다.
// 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되는가?
function strCount(str, dst) {
    return str.split(dst).length - 1;   //str 에서 dst 가 몇번 사용되는가
}
let numStr = ''
for(let i = 1; i < 1000; i++){
  numStr += i;
}

for( let num = 0; num <=9; num++) {
   // let count = numStr.split(String(num)).length-1;
   let count = strCount(numStr, String(num));
    console.log(`${num}은/는 ${count}번 사용됨.`)
}

// isPalindrome 함수 만들기
function isPalindrome(str) {
   let reverseStr = '';
   for(let i = str.lengt -1; i>=0; i--)
   reverseStr += str[i];
   return str == reverseStr;
}
console.log(isPalindrome('우영우'));

// C:\\Program Files\\nodejs\\node.exe. 에서 파일명만 출력하세요.
const path = 'C:\\Program Files\\nodejs\\node.exe.'
let index = path.lastIndexOf('\\');
let filename = path.substring(index + 1);
console.log(filename);