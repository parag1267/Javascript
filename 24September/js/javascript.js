// let btnClick = document.getElementById("btn1");
// btnClick.addEventListener("click",function(){
//     console.log("Click 1 times button");
// });

// let btndblClick = document.getElementById("btn2");
// btndblClick.addEventListener("dblclick",function(){
//     console.log("Double Click in 2 times button");
// });

// let btnmouseover = document.getElementById("btn3");
// btnmouseover.addEventListener("mouseover",() => {
//     btnmouseover.style.backgroundColor = 'blue';
//     console.log("Blue Color")
// })

// let btnmouseout = document.getElementById("btn3");
// btnmouseout.addEventListener("mouseout",() => {
//     btnmouseout.style.backgroundColor = 'white';
//     console.log("White Color");
// })


// let Btnmousemove = document.getElementById("btn4");
// Btnmousemove.addEventListener("mousemove",(event) => {
//     console.log("Mouse move");
//     console.log(event);
//     console.log(event.type);
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log(event.target);
//     console.log(event.currentTarget);
// })


// let keyDownRef = document.getElementById("Fullname");
// let keydownval = keyDownRef;

// keyDownRef.addEventListener("keydown",function(event){
//     console.log(keydownval.value);
// })

// let keyUpRef = document.getElementById("Fullname");
// let keyUpval = keyUpRef;

// keyUpRef.addEventListener("keyup", function(event){
//     console.log(keyUpval.value);
// })

// let keyPressRef = document.getElementById("Emails");
// let keyPressval = keyPressRef;
// keyPressRef.addEventListener("keypress",function(event){
//     console.log(keyPressRef.value);
// })

let Username = document.getElementById("Username");
let UsernameMessage = document.getElementById("UsernameMessage");

// Username.addEventListener("focus",() => {
//     Username.style.border = '2px solid blue';
//     Username.style.backgroundColor = 'yellow'
//     UsernameMessage.textContent = "Enetr at least 4 Character..";
//     UsernameMessage.className = "Errors";
// });

// Username.addEventListener("blur",() => {
//     Username.style.border = '2px solid gray';
//     if(Username.value.length < 4){
//         UsernameMessage.textContent = "Username short!!";
//         UsernameMessage.className = "Errors";
//     }
//     else{
//         UsernameMessage.textContent = "Look good!!";
//         UsernameMessage.className = "Success";
//     }
// });

// let Resize = document.getElementById("window");
// window.addEventListener("resize",(event) => {
//     console.log(event);
// });

// let Scroll = document.getElementById("Window");
// window.addEventListener("scroll",(event)=>{
//     console.log(event);
// });

// let Load = document.getElementById("Load");
// window.addEventListener("load",() => {
//     alert("Thanks of an visit my website..")
//     console.log("Load Successfully!!")
// });