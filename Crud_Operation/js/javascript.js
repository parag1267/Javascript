let tasks = JSON.parse(localStorage.getItem("todo")) ? JSON.parse(localStorage.getItem("todo")) : [];
function addTask(){
    let task = document.getElementById("task").value;
    let contactNo = document.getElementById("contactNo").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let hobbies = [];
    document.querySelectorAll('input[name="hobbies"]:checked').forEach(v => hobbies.push(v.value));
    let objec = {
        userId : Math.floor(Math.random() * 1000 + 1),
        userTask : task,
        userContactNo : contactNo,
        userGender : gender,
        userHobbies : hobbies,
    }
    tasks.push(objec);
    localStorage.setItem("todo",JSON.stringify(tasks));
    alert("Task add Successfully upload");
    viewData();
    document.getElementById("task").value = "";
    document.getElementById("contactNo").value = "";
    document.querySelector('input[name="gender"]:checked').value = "";
    document.querySelectorAll('input[name="hobbies"]:checked').forEach(v => v.checked = false);
}

function viewData(){
    let allRecord =  JSON.parse(localStorage.getItem("todo"));
    let table = "";
    allRecord.map((value,index) => {
        table += `
                    <tr>
                        <td>${value.userId}</td>
                        <td>${value.userTask}</td>    
                        <td>${value.userContactNo}</td>
                        <td>${value.userGender}</td>
                        <td>${value.userHobbies.join(", ")}</td>
                    </tr>
                `
    })
    document.getElementById("viewData").innerHTML = table;
}
viewData();