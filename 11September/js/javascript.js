// 01. Print numbers from 1 to 100 using a loop.
// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// 02. Print numbers from 100 to 1 using a loop.
// for(let i=100;i>=1;i--){
//     console.log(i);
// }

// 03. Print the multiplication table of 5 using a loop.
// for(let i=1;i<=10;i++){
//     console.log(5 + ' * ' + i + ' = ',(5*i));
// }

// 04. Print all odd numbers from 1 to 100.
// let i=1;
// while(i<=100){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//     i++;
// }


// 05. Print all even numbers from 1 to 100.
// let i=1;
// while(i<=100){
//     if(i % 2 === 0){
//         console.log(i);
//     }
//     i++;
// }


// 06. Find the sum of numbers from 1 to 100.
// let i = 1;
// let sum = 0;
// while(i<=100){
//     sum += i;
//     i++;
// }
// console.log("The 1 to 100 number of sum = ",sum);


// 07. Find the largest of two numbers.
// let a = 20;
// let b = 40;
// if(a>b){
//     console.log("Largest number = ",a);
// }
// else {
//     console.log("Largest number = ",b);
// }

// 08. Find the largest of three numbers.
// let a = 20;
// let b = 40;
// let c = 67;
// if (a >= b && a >= c) {
//     console.log("Largest number = ", a);
// }
// else if (b >= a && b >= c) {
//     console.log("Largest number = ", b);
// }
// else if (c >= a && c >= b) {
//     console.log("Largest number = ", c);
// }

// 09. Check whether a number is positive, negative, or zero.
// let a = 16;
// if(a>0)
// {
//     console.log("Positive number");
// }
// else if(a<0)
// {
//     console.log("Negative number");
// }
// else if(a == 0)
// {
//     console.log("Zero number");
// }


// 10. Swap two numbers using a temporary variable.
// let a = 67, b = 82, c;
// c = a;
// a = b;
// b = c;
// console.log("Swap number a = ", a);
// console.log("Swap number b = ", b);

// 11. Swap two numbers without using a temporary variable.
// let a = 67,b = 82;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("Swap number a = ",a);
// console.log("Swap number b = ",b);


// 12. Multiply two numbers without using (*) operator.
// let n1 = 16;
// let n2 = 8;
// let result = 0;
// for(let i = 1;i<=n2;i++){
//     result += n1;
//     console.log(n1 + ' * ' + i + ' = ',result); 
// }

// 13. Convert days into years, months, and days.
// let days = 670;

// let years = Math.floor(days / 365);
// let remaindays = days % 365;

// let months = Math.floor(remaindays / 30);
// let day = remaindays % 30;

// console.log(days + ' days ' + years + ' years ' + months + ' months ' + day + ' day ');


// 14. Convert seconds into hours, minutes, and seconds.
// let totalseconds = 4000;
// let hours = Math.floor(totalseconds / 3600);

// let remainseconds = totalseconds % 3600;

// let minutes = Math.floor(remainseconds / 60);
// let seconds = remainseconds % 60;

// console.log(totalseconds + ' Total Seconds = ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ');

// 15. Count the number of digits in an integer.
// let number = 1267890;
// let count = 0;
// while(number > 0){
//     number = Math.floor(number / 10);
//     count++;
// }
// console.log("Numbers of digits =",count);

// 16. Reverse the digits of a number.
// let number = 1234;
// let reverse = 0;
// while(number > 0 ){
//     let digits = number % 10;
//     reverse = reverse * 10 + digits;
//     number = Math.floor(number / 10);
// }
// console.log("Reverse number = ",reverse);

// 17. Store a number in reverse into another variable.
// let number = 1234;
// let reverse = 0;
// let original = number;
// while(number>0){
//     let digits = number % 10;
//     reverse = reverse * 10 + digits;
//     number = Math.floor(number / 10);
// }
// console.log("Reverse number = ",reverse);
// console.log("Original number =",original);

// 18. Check if a number is a palindrome.
// let number = 123;
// let original = number;
// let reverse = 0;
// while (number > 0 )
// {
//     let digits = number % 10;
//     reverse = reverse * 10 + digits;
//     number = Math.floor(number / 10);
// }
// if(original === reverse){
//     console.log("Palindrome number");
// }
// else {
//     console.log("Not an palindrome number");
// }


// 19. Check if a number is a prime number.
// let number = Number(prompt("Enter number"));
// let isPrime = true;
// if(number <= 1){
//     isPrime = false;
// }
// else{
//     for(let i = 2;i< number;i++){
//         if(number % 2 === 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime? number + " is prime" : number + " is not prime");

// 20. Find the factorial of a number. 
// let number = 8;
// let factorial = 1 ;
// for(let i=1;i<=number;i++){
//     factorial = factorial * i;
// }
// console.log("Factorial number = ",factorial);