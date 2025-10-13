// Create an array of 5 fruits. Add, remove, update values.
// let fruits = ["Apple","Kiwi","Banana","Coconut","Mango"];

// console.log(fruits);

// Add
// fruits.push("Orange");
// fruits.unshift("Papaya");
// fruits.splice(0,0,"Papaya");
// console.log(fruits);

// Remove
// fruits.pop(6);
// fruits.shift(0);
// console.log(fruits);

// Update
// fruits[3] = "Cherry";
// fruits[0] = "Applees";
// fruits.splice(1,1,"Strawberry");
// console.log(fruits);

// Find sum & average of 10 numbers in an array.
// let numbers = [10,20,30,40,50,60,70,80,90,100];

// let results = numbers.reduce((accu,cuur) => accu + cuur,0)
// let average = results / numbers.length;

// console.log("Numbers = ",numbers);
// console.log("Result = ",results);
// console.log("Average = ",average);

// Or
// let numbers = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;
// for(let i = 0;i<numbers.length;i++){
//     sum = sum + numbers[i];
// }
// let average = sum / numbers.length;
// console.log("Numbers = ",numbers);
// console.log("Sum = ",sum);
// console.log("Average = ",average);


// Reverse an array without using `reverse()`.
// let numbers = [10,20,30,40,50,60,70,80,90,100];
// let reverse = numbers.sort((a,b) => b-a);
// console.log("Reverse numbers = ",reverse);

// Extract even numbers using `filter()`.
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let even = numbers.filter(nm => nm % 2 === 0);
// console.log("Even number = ",even);

// Create a 2D matrix and print values using nested loops.
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(matrix);
// for(let i = 0; i<matrix.length;i++){
//     for(let j = 0; j<matrix[i].length;j++){
//         console.log(matrix[i][j]);
//     }
// }