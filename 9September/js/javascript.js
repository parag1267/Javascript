// Write a program to check if a number is positive, negative, or zero.
let number = -67;
if(number > 0){
    console.log("Positive")
}
else if (number < 0){
    console.log("Negative");
}
else {
    console.log("Zero")
}

// Write a program to check whether a person is eligible to vote(age >= 18).
let age = -16;
if (age >= 18){
    console.log("Eligible of an vote");
}
else if (age >= 0){
    console.log("Not eligible of vote");
}
else {
    console.log("Enter of valid age");
}


// Write a program to display grades based on marks using if...else if...else.
let marks = 67;
if (marks >=90){
    console.log("A1 Grade");
}
else if (marks >=80){
    console.log("A2 Grade");
}
else if (marks >=70){
    console.log("B Grade");
}
else if (marks >=60) {
    console.log("C Grade");
}
else if (marks >=33) {
    console.log("D Grade");
}
else {
    console.log("Fail");
}


//Write a program to check if a number is even or odd using if...else.
let nume = 16;
if(nume % 2 === 0){
    console.log("Even number");
} 
else {
    console.log("Odd number");
}


//Write a program using switch to display the day of the week when given a number (1-7).
let day = 6;
switch (day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter valid an day");
}