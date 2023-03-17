// 역 for 반복문
let sum = 0;
for(let i = 10; i > 0; i--){
    sum+=i;
    // console.log(`index=${i},sum=${sum}`)
}
// 1~ 10 홀수의 합

let oddSum = 0;
for(let i = 1; i <=10; i+=2){
    oddSum += i;
    console.log(`index=${i}, sum=${oddSum}`);
}
//48~10 3의 배수의 합
let mulSum = 0;
for(let i =48; i >= 10; i-=3){
    mulSum += i;
    console.log(`48~10의 3의 배수의 합=${mulSum}`);
}