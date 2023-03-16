//생일 - 오늘 현재 만나이
const bYear = 2000, bMonth = 3, bDay = 20;
const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth()+1;
const tDay = today.getDate();
console.log(tYear, tMonth, tDay);

let age;
if (tMonth >= bMonth && tDay >= bDay)
console.log(age = tYear - bYear);
else
console.log(age = tYear - bYear -1);


if (tMonth > bMonth)
    age = tYear - bYear;
else if (tMonth < bMonth)
    age = tYear - bYear -1;
else {
    if (tDay >= bDay)
    age = tYear - bYear;
else
    age = tYear - bYear-1;
}
console.log(age);