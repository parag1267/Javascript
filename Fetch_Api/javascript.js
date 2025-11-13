const userList = document.getElementById("userList");

fetch("https://fakestoreapi.com/users")
    .then((response) => response.json())
    .then((data) => {
        let allData = "";

        data.forEach((user) => {
            allData +=
                `
                    <div class="userData">
                        <h4><strong>Full Name :</strong>${user.name.firstname} ${user.name.lastname}</h4>
                        <p><strong>Id :</strong>${user.id}</p>
                        <p><strong>Email :</strong>${user.email}</p>
                        <p><strong>Username :</strong>${user.username}</p>
                        <p><strong>Password :</strong>${user.password}</p>
                        <p><strong>Contact No :</strong>${user.phone}</p>
                        <p><strong>City :</strong>${user.address.city}</p>
                    </div>
                `;
        });

        userList.innerHTML = allData;
    })
    .catch((error) => console.log(error));