// 1~10 홀수의 합
let sum = 0;
for(let i = 1; i<=10; i++) {
    if(i % 2 == 0)
        continue;
    sum+=i;
    console.log(`index=${i}, sum=${sum}`);
}
// 배열의 값이 홀수인 원소의 합
let numbers = [3, 57, 25 , 48, 83, 79];
let oddSum = 0;
for(let number of numbers) {
    if(number % 2 == 0)
    continue;
    oddSum += number;
}
console.log(oddSum)

for(let number of numbers) {
    if(number % 2 == 1)
    oddSum += number;
}
console.log(oddSum)

for(let i = 0;i <5; i++) {
    for(let k = 0; k<5; k++) {
        if(k == 2)
        break;          //A 위치로 한 단계만 탈출
    }
    // A위치
}
//B위치