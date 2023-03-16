// switch - multiple select
let score = 94;
let scoreDigit = parseInt(score / 10);  //10으로 나눈 몫의 정수값
let grade;

switch (scoreDigit) {
    case 10:
        grade = 'A'; break;
    case 9:
        grade = 'A'; break;
    case 8:
        grade = 'B'; break;
    case 7:
        grade = 'C'; break;
    case 6:
        grade = 'D'; break;
    default:
        grade = 'F';
}
console.log(`성적: ${score}, 학점: ${grade}`);