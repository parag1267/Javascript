let InsertDataRefe = document.querySelector("#InsertData");
let AddButtonRefe = document.querySelector("#AddButton");

function AddData() {
    let div = document.createElement("div");
    div.className = "InsertData";

    let input = document.createElement("input");
    input.type = "text";
    input.className = "Input";
    input.placeholder = "Enter value";

    let buttonPlus = document.createElement("button");
    buttonPlus.type = "button";
    buttonPlus.className = "AddButton";
    buttonPlus.textContent = "+";
    buttonPlus.style.margin = "8px";

    let buttonMinus = document.createElement("button");
    buttonMinus.type = "button";
    buttonMinus.className = "MinusButton";
    buttonMinus.textContent = "-";
    buttonPlus.style.margin = "8px";

    buttonPlus.addEventListener("click", () => {
        AddData(div);
    });
    buttonMinus.addEventListener("click", () => {
        div.remove();
    });

    [input,buttonPlus,buttonMinus].forEach(el => div.appendChild(el));
    // div.appendChild(input);
    // div.appendChild(buttonPlus);
    // div.appendChild(buttonMinus);

    InsertDataRefe.appendChild(div);

}

AddButtonRefe.addEventListener("click", AddData);

