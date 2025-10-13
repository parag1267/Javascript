// Write a function to calculate the square of a number.
// let number = Number(prompt("Enter number"));
// function square(no){
//     return no * no;
// }
// console.log(square(number));

// Create a function that takes two numbers and returns the larger one.
// let n1 = Number(prompt("Enter Is first Number "));
// let n2 = Number(prompt("Enter Is Second Number "));
// const large = function(number1,number2){
//     if(number1 > number2)
//         return number1 + " is large";
//     else if(number2 > number1)
//         return number2 + " is large";
//     else
//         return "Both equal";
// }
// console.log(large(n1,n2));

// Write a function isEven(num) that returns true if the number is even,otherwise false.
// let number = Number(prompt("Enter number"));
// function isEven(num){
//     if(num % 2 === 0)
//         return true;
//     else
//         return false;
// }
// console.log(isEven(number));

// Create a function that greets the user with their name. If no name is provided, greet them as "Guest".
// function greetUser(name = "Guest"){
//     return "Welcome " + name;
// }
// console.log(greetUser("PCHAdiya"));
// console.log(greetUser());

// Store a function in a variable that multiplies two numbers and call it.
// let number1 = Number(prompt("Enter is first number"));
// let number2 = Number(prompt("Enter is second number"));
// const multiplies = function(n1,n2){
//     return n1 * n2;
// }
// console.log(multiplies(number1,number2));

// Factorial of a number
// let number = Number(prompt("Enter number"));
// function Factorial(no){
//     let fact = 1;
//     for(let i = 1;i<=no;i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(Factorial(number));


// Reverse a number
// let number = Number(prompt("Enter number"));
// function Reverse(no){
//     let reve = 0;
//     while (no > 0)
//     {
//         let digit = no % 10;
//         reve = reve *10 + digit;
//         no = Math.floor(no / 10);
//     }
//     return reve;
// }
// console.log(Reverse(number));


// Palindrome check is number
// let number = Number(prompt("Enter number"));
// const Palindrome = function(no){
//     let original = no;
//     let reverse = 0;
//     while (no > 0){
//         let digit = no % 10;
//         reverse = reverse * 10 + digit;
//         no = Math.floor(no / 10);
//     }
//     return reverse === original;
// }
// console.log(Palindrome(number));


// Sum of digits of a number.
// let number = Number(prompt("Enter number"));
// const sumnumber = function(no){
//     let sum = 0;
//     while (no > 0)
//     {
//         let digits = no % 10;
//         sum = sum + digits;
//         no = Math.floor(no / 10);
//     }
//     return sum;
// }
// console.log(sumnumber(number));


// let number = prompt("Enter mobile number pleause");
// let leng = number.length;
// let last = "";
// for(let i = leng - 5;i<leng;i++){
//     last = last + number[i];
// }
// console.log("Last five digit mobile",last);

// let number = prompt("Enter mobile number pleause");
// let last = number % 100000;
// console.log(last);