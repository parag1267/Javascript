let heightInputRefe = document.getElementById("height");
let weightInputRefe = document.getElementById("weight");
let btnRefe = document.getElementById("bmiCalculate");
let valuebmi = document.getElementById("bmi_value");
let classbmi = document.getElementById("bmi_class");
let resultDiv = document.querySelector(".result");
let InvalidRefe = document.querySelector(".Invalid");

btnRefe.addEventListener("click", function () {
    
    if(isNaN(heightInputRefe.value) || isNaN(weightInputRefe.value) || heightInputRefe < 0 || weightInputRefe < 0){
        console.log("Enter valid value pleause");
        return;
    }

    if(heightInputRefe.value.trim() === "" || weightInputRefe.value.trim() === ""){
        resultDiv.className = "result Invalid" ;
        InvalidRefe.textContent = "Height and Weight does not Empty!!";
        return;
    }

    let heightMeter = heightInputRefe.value / 100;
    let Bmi = (weightInputRefe.value / (heightMeter * heightMeter)).toFixed(1);


    let Bmivalue = "";
    let BmiClass = "";
    
    if(Bmi < 18.5){
        Bmivalue = "Under weight";
        BmiClass = "underweight";
    }
    else if(Bmi >= 18.5 && Bmi <= 24.9){
        Bmivalue = "Normal weight";
        BmiClass = "normalweight";
    }
    else if(Bmi >= 25 && Bmi <= 29.9){
        Bmivalue = "Over weight";
        BmiClass = "overweight";
    }
    else if(Bmi >= 30 && Bmi <= 39.9){
        Bmivalue = "Obesity I";
        BmiClass = "obesityweight";
    }
    else {
        Bmivalue = "Obesity II";
        BmiClass = "Obesity II"
    }

    valuebmi.textContent = Bmi;
    classbmi.textContent = BmiClass;
    resultDiv.className = "result " + BmiClass;
    
});