function savedButton() {
    let name = document.getElementById("name").value;
    console.log(name);

    if (name === "") {
        let nameError = document.getElementById("nameError");
        nameError.innerHTML = "Name is an reqired";
        nameError.style.color = "red";
    } else {
        nameError.innerHTML = "";
    }

    let email = document.getElementById("email").value;
    console.log(email);

    if (email === "") {
        let emailError = document.getElementById("emailError");
        emailError.innerHTML = "Email is an reqired";
        emailError.style.color = "red";
    } else {
        emailError.innerHTML = "";
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            let emailError = document.getElementById("emailError");
            emailError.innerHTML = "Email is enter valid";
            emailError.style.color = "red";
        }
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if(!gender){
        let genderError = document.getElementById("genderError");
        genderError.innerHTML = "Gender is an reqired";
        genderError.style.color = "red";
    }
    else{
        genderError.innerHTML = "";
    }

    let hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    if(hobbies.length < 1){
        let hobbiesError = document.getElementById("hobbiesError");
        hobbiesError.innerHTML = "Atlest one Select hobbies";
        hobbiesError.style.color = "red";
    }
    else{
        hobbiesError.innerHTML = "";
    }
}