// Date 객체 생성 방법
// 1. 현재 날짜 / 시간
let today = new Date();
console.log(today);
console.log(today.toDateString());
console.log(today.toLocaleString()); //Timezone 반영됨.
//YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10)? '0' + num : String(num);
 }
 function myDatetime() {
     let date = new Date();
     return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())}`+
     `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
 }

 console.log(myDatetime());

//2. Unix time 기준(1970.1.1 이후 ms 단위)
let unixDay = new Date(1.6794e12)
console.log(unixDay);
// 3. 문자열 기반
let strDate = new Date('2023-03-21 09:25:00');
console.log(strDate);

//4. 날짜/시간 요소 기반
let elementDay = new Date(2023, 3 -1, 21, 9, 30, 0, 0);
console.log(elementDay);

/*
시간연산
*/
//더하기 뺴기
today.setDate(today.getDate()+ 100);
console.log(myDatetime(today));
today.setDate(today.getDate()- 100);
console.log(myDatetime(today));

//오늘: 1년 2개월 3일 후
let date = new Date();
date.setFullYear(date.getFullYear() +1); // 1년후
date.setMonth(date.getMonth() +2);     // 2개월후
date.setDate(date.getDate() +3);         //3일후
console.log(myDatetime(date));

//시간 간격
let christmas = new Date(2023, 11, 25);
let diffMs = christmas.getTime() - today.getTime();
let diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

//수능일 : 2023-11-16
diffMs = new Date(2023, 10, 16).getTime() - today.getTime();
diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);
//어제 날짜
diffMs = today.getTime() - new Date(2023, 02, 20).getTime() ;
diffDay = Math.floor(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);