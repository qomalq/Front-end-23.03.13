// 구구단
let N =2;
for(let i = 1; i <= 9; i++){
console.log(` ${N} * ${i} = ${N*i}`)
}

// // 알람 시계
let H = 0;
let M = 30;

if(H != 0) {
    if(M >= 45) {
        console.log(`${H}시 ${M - 45}분`);
    }else{
        console.log(`${H - 1}시 ${60 - (45 - M)}분`);
    }
}else if(H == 0 && M < 45) {
    console.log(`23시 ${60 - (45 - M)}분`);
}else if(H == 0 && M >= 45) {
    console.log(`${H}시 ${M - 45}분`);
}

// // //주사위
let dice1 = parseInt(Math.ceil(Math.random() * 6));

let dice2 = parseInt(Math.ceil(Math.random() * 6));

let dice3 = parseInt(Math.ceil(Math.random() * 6));

if (dice1 == dice2 && dice1 == dice3) {
    console.log(10000 + dice1 * 1000);
} else if (dice1 == (dice2 || dice3) || dice2 == dice3) {
    console.log(dice1 == dice2 ? 1000 + dice1 * 100 : 1000 + dice2 * 100);
} else {
    console.log(Math.max(dice1,dice2,dice3)*100);
}
  