//1~100 합 구하기
let sum = 0
for(let i = 1; i <= 1000; i++){
    sum += i;
}
console.log(`1~1000 정수의 합= ${sum}`)

// 1~10 곱 구하기

let prod = 1;
for(let i =1; i <= 20; i++){
    prod *=i;
}
console.log(`1~20 정수의 곱 = ${prod}`);

//배열의 데이터를 하나의 문자열로 만들기
let fruits = ['사과', '배', '귤', '딸기'];
let fruitStr = '';      //초기값으로 empty string
for(let fruit of fruits){
    fruitStr += fruits;
}
console.log(fruitStr);
