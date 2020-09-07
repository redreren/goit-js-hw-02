let input = " ";
const numbers = [];
let total = 0;

while (input) {
  input = prompt("Введите число");
  console.log(input);
  if (input == null) {
    alert("Отменено пользователем");
    console.log(input);
    // continue;
  } else {
    input = Number(input);
    if (!isNaN(input)) {
      numbers.push(input);
      //   total += input;
    }
  }
}
for (let number of numbers) {
  total += number;
}
console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);

// METHOD 2

// let input = +prompt("Введите число");
// const numbers = [];
// let total = 0;
// for (let i = 0; input !== null || input == false; i++) {
//   if (i < 10) {
//     console.log(+input);
//     break;
//   }
//   input = +input;
//   if (!isNaN(input)) {
//     numbers.push(input);
//     total += input;
//     // console.log(total);
//   } else {
//     console.log("Введите число");
//   }
// }
// console.log(numbers);
// console.log(total);
