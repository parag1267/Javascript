let IncrementRefe = document.getElementById("Increment");
let DecreemntRefe = document.getElementById("Decrement");
let ageRefe = document.getElementById("Input");

let age = Number(localStorage.getItem("age")) || 0;
ageRefe.value = age;

IncrementRefe.addEventListener("click",function(){
    age++;
    ageRefe.value = age;
    localStorage.setItem("age",age);
});

DecreemntRefe.addEventListener("click",function(){
    age--;
    ageRefe.value = age;
    localStorage.setItem("age",age);
});
