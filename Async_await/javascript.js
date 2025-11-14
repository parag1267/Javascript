let userList = document.getElementById("userList");
let button = document.getElementById("clickButton").addEventListener("click", fetchAPi);

async function fetchAPi() {
    try {
        const response = await fetch("https://fakestoreapi.com/users/2");
        const data = await response.json();

        let allData = "";
        data.forEach((user) => {
            allData +=
                `
                    <div class="userData">
                        <h4><strong>Full Name : ${user.name.firstname} ${user.name.lastname}</strong></h4>
                        <p><strong>Id : ${user.id}</strong></p>
                        <p><strong>Email :</strong>${user.email}</p>
                        <p><strong>Username :</strong>${user.username}</p>
                        <p><strong>Password :</strong>${user.password}</p>
                        <p><strong>Contact No :</strong>${user.phone}</p>
                        <p><strong>City :</strong>${user.address.city}</p>
                    </div>
                
                `;
        });

        userList.innerHTML = allData;
    }

    catch(error){
        console.log("Error fetching users : ",error)
    }
}
