// year will be a leap year if the year is divisible by 4.........
function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const result = leapYear(2025);
// console.log(result);


// those year that is not divisible by 100,if the year is divisible by 4 then it wil be a leap year

function leapYear2(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400){
        return false;
    }else{
        return true;
    }
}
const result2= leapYear2(2000);
const result3= leapYear2(2100);
const result4= leapYear2(2400);
const result5= leapYear2(2500);
console.log(result2,result3,result4,result5);
