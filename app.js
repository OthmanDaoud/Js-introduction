// // Q1
// console.log(-5 * 3);
// console.log("JavaScript" + 50);
// console.log(17 % 5);
// console.log(5 % 17);
// console.log(5 / 10);
// console.log(4 === "4");
// console.log(4 != 5);
// console.log(7 <= 8);
// console.log("Hello" + 5);

// let x = 5;
// console.log(Math.ceil(x) - Math.floor(x));
// console.log(Math.pow(x, 2));

// // Q2
// let num = prompt("Please Enter A Number");
// alert(num);

// // Q3
// let num1 = prompt("Please Enter First Number");
// let num2 = prompt("Please Enter Second Number");
// if (num1 > num2) {
//   alert(num1 + " " + num2);
// } else {
//   alert(num2 + " " + num1);
// }
// // Q4
// if (num1 > num2) {
//   alert("The largest Number is " + num1);
// } else {
//   alert("The largest Number is " + num2);
// }

// // Q5
// let num3 = prompt("Please Enter Third Number");
// let num4 = prompt("Please Enter Forth Number");
// let sum = parseInt(num3) + parseFloat(num4);
// alert(sum);

// Q6
let y = parseInt(prompt("Please Enter a Number"));

switch (y) {
  case 1:
    y = "ONE";
    break;

  case 2:
    y = "TWO";
    break;

  case 3:
    y = "THREE";
    break;

  case 4:
    y = "FOUR";
    break;

  case 5:
    y = "FIVE";
    break;

  case 6:
    y = "SIX";
    break;

  case 7:
    y = "SEVEN";
    break;

  case 8:
    y = "EIGHT";
    break;

  case 9:
    y = "NINE";
    break;

  default:
    y = "PLEASE TRY AGAIN";
}
alert(y);
