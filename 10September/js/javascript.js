// Write a program to print numbers from 1 to 10 using all three loops.
// for(let i = 1;i<=10;i++){
//     console.log(i);
// }

// let i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// let i = 1;
// do {
//     console.log(i);
//     i++;
// }while(i<=10);

// Print even numbers from 1 to 20 using a for loop.
// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 2)
//         console.log(i);
// }


// Use a while loop to calculate the sum of numbers from 1 to 100.
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log(sum);


// Write a do...while program to ask the user for a password until they enter the correct one.
// let userPassword;
// do {
//     userPassword = prompt('Enter password');
// } while(userPassword != 'PCHadiya');


// Create a multiplication table of 5 using a for loop.
// for (let i = 1 ; i <=10; i++){
//     console.log(5 + ' * ' + i + ' = ',(5*i));
// }

// Find the sum of digits of a number using loops.
// let number = 1234;
// let sum = 0;
// while (number > 0){
//     let digit = number % 10;
//     sum = digit + sum;
//     number = Math.floor(number/10);
// }
// console.log("Sum of the digit = ",sum);

// Check if a number is a palindrome using loops.
// let number = 121;
// let original = number;
// let reverse = 0;
// while(number > 0){
//     let digits = number % 10;
//     reverse = reverse * 10 + digits;
//     number = Math.floor(number / 10);
// }
// if(original === reverse){
//     console.log(`${original} is an palindrome number`);
// }
// else {
//     console.log(`${original} is not an palindrome number`);
// }