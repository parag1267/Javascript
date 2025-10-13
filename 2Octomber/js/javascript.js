let Users = [
    {
        name : "PCHAdiya",
        city : "Surat",
        ContactNo : 9737712612,
        Address : "Surat"
    },
    {
        name : "Mahendra",
        city : "Surat",
        ContactNo : 6356143218,
        Address : "Surat"
    },
];

function viewData(){
    let tbl = "";
    Users.map((value,index) => {
        tbl += `
                <tr>
                    <td>${value.name}</td>
                    <td>${value.city}</td>
                    <td>${value.ContactNo}</td>
                    <td>${value.Address}</td>
                </tr>
                `
    });

    document.getElementById("view").innerHTML = tbl;
}
viewData();