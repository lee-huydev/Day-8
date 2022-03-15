//! Bài 1:  Kiểm tra số nguyên tố
// let value = prompt('Nhập vào một dãy số: ');
// let value2 = value.split(',');
// function check(number) {
//    if (number < 2) {
//       return false;
//    }
//    for (let i = 2; i <= number / 2; i++) {
//       if (number % i == 0) {
//          return false;
//       }
//    }
//    return true;
// }
// console.log(`Những số là số nguyên tố là: \n`);
// for (let i = 0; i < value2.length; i++) {
//    if (check(value2[i]) == true) {
//       console.log(value2[i]);
//    }
// }
//! Bài 2: Nhập vào mảng 1 dãy số ngẫu nhiên và in ra số lớn nhất và tính tổng các số có trong mảng
let lengthArr = prompt('Nhập vào độ dài của mảng').split(',');
let myArr = [];
function inArr() {
   for (let i = 0; i < Number(lengthArr); i++) {
      myArr[i] = Math.floor(Math.random() * 100);
   }
}
inArr();
let numberMin = myArr[0];
function valueMin() {
   for (let i = 0; i < Number(lengthArr); i++) {
      if (numberMin > myArr[i]) {
         numberMin = myArr[i];
      }
   }
}
console.log(myArr);
valueMin();
console.log(`Số nhỏ nhất trong mảng là: ${numberMin}`);
let sum = 0;
function total() {
   for (let i = 0; i < Number(lengthArr); i++) sum += myArr[i];
   return sum;
}
total();
console.log(`Tổng các giá trị trong mảng là: ${sum}`);
