// 01. Print numbers from 1 to 100 using a loop.
// let numbers = Number(prompt("Enter number : "));
// let result = "";
// for(let i=1;i<=numbers;i++){
//     result = result + i + " ";
// }
// alert("Number = " + result);

// 02. Check whether a number is even or odd using a function.
// let number = Number(prompt("Enter number : "));
// function oddeven(number){
//     if(number % 2 === 0){
//         return number + " is even ";
//     }
//     else{
//         return number + " is odd ";
//     }
// }
// alert(oddeven(number));

// 03. Find the largest of three numbers.
// let n1 = Number(prompt("First Namber = "));
// let n2 = Number(prompt("Second Namber = "));
// let n3 = Number(prompt("Third Namber = "));
// if(n1 >= n2 && n1 >= n3){
//     alert("Greater than number : " + n1);
// }
// else if(n2 >= n3 && n2 >= n1){
//     alert("Greater than number : " + n2);
// }
// else if(n3 >=n1 && n3 >= n2){
//     alert("Greater than number : " + n3);
// }
// else{
//     alert("Enter the Correct Number");
// }


// 04. Print the multiplication table of 5 using a loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(5 + ' * ' + i + ' = ', (5 * i));
// }

// 05. Reverse the digits of a number.
// let number = Number(prompt("Enter number : "));
// let reverse = 0;
// while( number > 0){
//     let digit = number % 10;
//     reverse = reverse * 10 + digit;
//     number = Math.floor(number / 10);
// }
// alert("Number of digit reverse = " + reverse);

// 06. Find the sum of numbers from 1 to 100.
// let sum = 0;
// for(let i=1;i<=100;i++){
//     sum = sum + i;
// }
// console.log(sum);

// 07. Write a function to calculate the factorial of a number.
// let number = Number(prompt("Enter the factorial number : "));
// let factorial = 1;
// for(let i=1;i<=number;i++){
//     factorial = factorial * i;
// }
// alert("Factorial number = " + factorial);

// 08. Find the largest element in an array.
// let arra = [10,20,30,40,50,60,70];
// let largest = Math.max(...arra);
// console.log("Largest number = " + largest);

// 09. Search for a given element in an array.
// let arra = [10,20,30,40,50,60,70];
// let Search = Number(prompt("Enter element to serach : "));
// let exits = arra.includes(Search);
// alert(exits ? " Element " + Search + " Found " : "Not Found");


// 10. Check whether a string is a palindrome.
// let stri = prompt("Enter text : ");
// let ispalindrome = true;
// for(let i=0;i< stri.length / 2;i++){
//     if(stri[i] !== stri[stri.length - 1 - i]){
//         ispalindrome = false;
//         break;
//     }
// }
// alert(ispalindrome ? "Palindrome" : "Not Palindrome");


// 11. Sort an array in ascending order.
// let input = prompt("Enter number : ");
// function sortArray(){
//     let arr = input.split(",").map(Number);
//     arr.sort(function(a,b){
//         return a - b;
//     });
//     alert("Ascending order = " + arr);
// }
// sortArray();


// Or
// let arra = [10,30,60,40,20,70];
// let result = arra.sort((a,b) => a - b);
// console.log(result);

// 12. Create an object representing a student (name, age, grade) and print its properties.
// let student = {
//     name : "PCHAdiya",
//     age : 22,
//     grade : "A+"
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.grade);

// 13. Add a new property (address) to the student object.
// student.address = "Surat";
// console.log(student);


// 14. Count how many even and odd numbers are in an array.
// let array = [10,20,67,16,44,13,60,11];
// let evenCount = array.filter(number => number % 2 === 0).length;
// let oddCount = array.filter(number => number % 2 === 1).length;
// console.log("Even = " + evenCount);
// console.log("Odd = " + oddCount); 



// 15. Print all odd numbers from 1 to 100.
// for(let i=1;i<=100;i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// 16. Remove duplicate elements from an array.
// let array = [1,1,2,3,4,5,6,6,7,7];
// let unique = [...new Set(array)];
// console.log("Remove Duplicate element array = " + unique);

// 17. Swap two numbers without using a temporary variable.
// let n1 = Number(prompt("Enter First number : "));
// let n2 = Number(prompt("Enter Second number : "));
// n1 = n1 + n2;
// n2 = n1 - n2;
// n1 = n1 - n2;
// alert("Swap First number is = " + n1 + "\n" + "Swap Second number is = " + n2);

// 18. Find the sum of digits of a number.
// let number = Number(prompt("Enter number : "));
// let sum = 0;
// while(number > 0){
//     let digit = number % 10;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }
// alert("The sum of digits of an number = " + sum);


// 19. Loop through all keys and values of an object.
// let student = {
//     name : "P.C.HAdiya",
//     address : "Surat",
//     course : "Full-Stack Development Course",
//     year : 2026
// }
// for (const key in student) {
//     console.log(key,student[key]);
// }

// 20. Create an array of student objects and print the names of students who scored more than 80 marks.
// let student = [
//     {
//         name: "P.C.HAdiya",
//         mark: 82,
//     },
//     {
//         name : "Ravina",
//         mark : 88,
//     },
//     {
//         name : "Yogesh",
//         mark : 76,
//     },
//     {
//         name : "Payal",
//         mark : 67,
//     }
// ];

// let students = student.filter(stud => stud.mark > 80);
// students.forEach(stud => {
//     console.log(stud.name + " " + stud.mark);
// });

// 21. Income Tax Calculator
// Write a program that takes income and gender as input using prompt(), and calculates tax based on:

// If male and income > 5,00,000 → 10% tax
// If female and income > 5,00,000 → 8% tax
// Otherwise → No tax
// 👉 Code should check for all conditions (male/female + income ranges).


// let income = Number(prompt("Enter income"));    
// let gender = prompt("Enter gender (Male or Female) : ").toLowerCase();    
// let tax = 0;

// if(gender === "male"){
//     if(income > 500000){
//         tax = income * 0.10;
//     }
//     else{
//         alert("No tax");
//     }
// }
// else if(gender === "female"){
//     if(income > 500000){
//         tax = income * 0.8;
//     }
//     else{
//         alert("No tax");
//     }
// }
// else{
//     alert("Invalid gedner");
// }
// alert("Income = " + income + "\n" + "Gender = " + gender + "\n" + "Calculate tax = " + tax);

// 22. Scholarship Eligibility (Based on Category & Marks)

//     Write a program that takes category (SC/ST/OBC/General) and marks from prompt(), and checks eligibility:

//     SC / ST → eligible if marks ≥ 40
//     OBC → eligible if marks ≥ 50
//     General → eligible if marks ≥ 60
//     👉 Code should handle all categories and print “Not Eligible” if below criteria.
// let category = prompt("Enter Category (SC/ST/OBC/General) : ").toLowerCase();
// let marks = Number(prompt("Enter marks : "));
// let eligibility;
// if(category === "sc" || category === "st"){
//     eligibility = (marks >= 40) ? "Eligible" : "Not Eligible"
// }
// else if(category === "obc"){
//     eligibility = (marks >= 50) ? "Eligible" : "Not Eligible"
// }
// else if(category === "general"){
//     eligibility = (marks >= 60) ? "Eligible" : "Not Eligible"
// }
// else{
//     alert("Invalid Category");
// }
// alert("Category = " + category + "\n" + "Mark = " + marks + "\n" + "Scholarship Eligibility = " + eligibility);


// 23. Grade Calculation Based on CGPA
// Write a program that takes CGPA from prompt() and converts it into grade:

// CGPA ≥ 9 → Grade A
// CGPA ≥ 8 → Grade B
// CGPA ≥ 7 → Grade C
// CGPA ≥ 6 → Grade D
// Otherwise → Fail
// 👉 Code should check all grade levels and give correct grade.
// let cgpa = Number(prompt("Enter CGPA : "));
// let grade = "";
// if (cgpa >= 9) {
//     grade = "A";
// }
// else if (cgpa >= 8) {
//     grade = "B";
// }
// else if (cgpa >= 7) {
//     grade = "C";
// }
// else if (cgpa >= 6) {
//     grade = "D";
// }
// else {
//     grade = "Fall";
// }
// alert("CGPA = " + cgpa + "\n" + "Grade = " + grade);

// 24. Electricity Bill Calculator

//     Write a program that takes units consumed from prompt() and calculates bill:

//     First 100 units → ₹5 per unit
//     Next 200 units → ₹7 per unit
//     Above 300 units → ₹10 per unit
// //     👉 Code should check all unit ranges and compute bill correctly.
// let unit = Number(prompt("Enter an units Consumed :"));
// let bill = 0;
// if(unit <= 100){
//     bill = unit * 5;
// }
// else if(unit <= 300){
//     bill = 100 * 5 + (unit - 100) * 7;
// }
// else{
//     bill = 100 * 5 + 200 * 7 + (unit - 300) * 10;
// }
// alert("Unit = " + unit + "\n" + "Bill = " + "Rs.." + bill);


// 25. Simple Bank Account System
// Write a program that takes initial balance from prompt() and then asks for operation(deposit, withdraw, balance):

// Deposit → add amount
// Withdraw → subtract amount(only if balance is enough)
// Balance → show current balance
// 👉 Code should check for valid operations and handle insufficient balance properly.

// let initialBalance = Number(prompt("Enter an initial Balance : "));
// let operation = prompt("Enter opeartion(Deposit,Withdraw,Balance)").toLowerCase();
// if (operation === "deposit") {
//     let amount = Number(prompt("Enter an amout deposit : "));
//     if (amount <= 0)
//         alert("Enter an valid amount!");
//     else {
//         initialBalance = initialBalance + amount;
//         alert("Deposit amount = " + amount + "\nNew Balance = " + initialBalance);
//     }
// }
// else if (operation === 'withdraw') {
//     let amount = Number(prompt("Enter an amout withdraw : "));
//     if (amount <= 0)
//         alert("Enter an valid amount!");
//     else if (amount > initialBalance) {
//         alert("Unvalid amount ( Please an Correct amount )")
//     }
//     else {
//         initialBalance = initialBalance - amount;
//         alert("Withdraw amount = " + amount + "\nNew Balance = " + initialBalance);
//     }
// }
// else if (operation === "balance") {
//     alert("Current Balance = " + initialBalance);
// }
// else {
//     alert("Invalid opeartion!(Please Choose Deposit,Withdraw,Balance ")
// }
