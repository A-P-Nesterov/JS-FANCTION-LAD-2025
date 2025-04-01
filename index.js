// //1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function squaredNumber(a) {
//   return a ** 2;
// }
// console.log(squaredNumber(3));
// //2. Сделайте функцию, которая возвращает сумму двух чисел.
// function sumNumbers(a, b){
//     return a+b;
// };
// console.log(sumNumbers(2,3));
// console.log(sumNumbers(-2,3));
// console.log(sumNumbers(200,354));
//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function calculatingТumbers(a, b, c){
//     return (a-b)/c;
// };
// console.log(calculatingТumbers(20, 5, 3));
//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function showDayWeek(a) {
//   if (a === 1) {
//     return "Понедельник";
//   } else if (a === 2) {
//     return "Вторник";
//   } else if (a === 3) {
//     return "Среда";
//   } else if (a === 4) {
//     return "Четверг";
//   } else if (a === 5) {
//     return "Пятница";
//   } else if (a === 6) {
//     return "Суббота";
//   } else if (a === 7) {
//     return "Воскресенье";
//   } else {
//     return "Введи число еще раз.";
//   }
// }
// console.log(showDayWeek(5));
//5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// function comparingNumbers(a = 2, b = 3) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(comparingNumbers());
//6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
// function comparingNumbers(a = 8, b = 3) {
//   if (a + b >= 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(comparingNumbers());
//7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// function checkingNumberNegativity(a = 1) {
//   if (a > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkingNumberNegativity());
// console.log(checkingNumberNegativity(5));
// console.log(checkingNumberNegativity(15));
// console.log(checkingNumberNegativity(-5));
// //8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(a = 1) {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange());
// console.log(isNumberInRange(5));
// console.log(isNumberInRange(15));
// console.log(isNumberInRange(-5));
//9. *Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum(num = 12345) {
//   let strArr = num.toString().split("");
//   let numArr = strArr.map(function (num) {
//     return parseInt(num, 10);
//   });
//   let sum = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     sum = sum + numArr[i];
//   }
//   console.log(sum);
// }
// getDigitsSum(23456789);
//10. *Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// function sumOfDigits(year) {
//   return year
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((sum, digit) => sum + digit, 0);
// }

// const yearsWithSumOfDigits13 = [];

// for (let year = 1; year <= 2020; year++) {
//   if (sumOfDigits(year) === 13) {
//     yearsWithSumOfDigits13.push(year);
//   }
// }

// console.log(yearsWithSumOfDigits13);

// 11.  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(num) {
//   if (!Number.isInteger(num)) {
//     throw new Error("Введите целое число");
//   }
//   return num % 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));

//12. *Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
// function sumOfDigits(num) {
//   while (num > 9) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((acc, digit) => acc + Number(digit), 0);
//   }
//   return num;
// }

// const number = 56789;
// const result = sumOfDigits(number);
// console.log(
//   `Сумма цифр числа ${number}, сведенная к однозначному числу: ${result}`
// );

//13. * Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.
// const isPalindrome = (str) => {
//   const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
//   return cleanedStr === cleanedStr.split("").reverse().join("");
// };

// console.log(isPalindrome("A man, a plan, a canal, Panama"));
// console.log(isPalindrome("Hello, World!"));
