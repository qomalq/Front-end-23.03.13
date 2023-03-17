// 어떤 양수의 약수 구하기
let num = 12;
let divisors = [];   //emtpy array
for(let i = 1; i <= 12; i++){
    if(num % i == 0)
    divisors.push(i);
}
console.log(`${num}의 약수: ${divisors}`);

// 두 수의 공약수
let num1 = 24;
let num2 = 60;
let commonDivisors = [];
for(let i = 1; i <= ((num1 > num2)? num2 : num1); i++){
    if(num1 % i == 0 && num2 % i == 0){
        commonDivisors.push(i);
    }
}
console.log(`${num1}, ${num2}의 공약수 : ${commonDivisors}`);