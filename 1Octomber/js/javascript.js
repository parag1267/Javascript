let Display = document.querySelector("#display");
let Buttons = document.querySelectorAll(".button");
let stri = "";
Array.from(Buttons).forEach((value) => {
    value.addEventListener("click", function (e) {
        if (e.target.innerHTML == '=') {
            stri = eval(stri);
            Display.value = stri;
        }
        else if(e.target.innerHTML == 'C'){
            stri = "";
            Display.value = stri;
        }
        else {
            console.log(e.target);
            stri = stri + e.target.innerHTML;
            Display.value = stri;
        }


        // console.values = value.textContent;
    })
})