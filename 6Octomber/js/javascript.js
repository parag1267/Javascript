// let i = 1;
// while (i <= 5) {
//     document.write(i + "<br>");
//     i++;
// }


// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write("* ");
//     }
//     document.write("<br>");
// }


// for (let i = 1;i<=5;i++){
//     for(let j = 1;j<=i;j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }

// for(let i = 5;i>=1;i--){
//     for(let j = 1;j<=i;j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }

// for(let i = 65;i<=69;i++){
//     for(let j = 65;j<=i;j++){
//         document.write(String.fromCharCode(i) + " ");
//     }
//     document.write("<br>");
// }


// for(let i = 65;i <= 69;i++){
//     for(let j=65;j<=i;j++){
//         document.write(String.fromCharCode(j) + " ");
//     }
//     document.write("<br>");
// }


// for (let i = 5; i >= 1; i--) {
//     for (let s = 1; s <= 5-i; s++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

for (let i = 1; i <= 5; i++) {
    for (let s = 5; s > i; s--) {
        document.write("&nbsp;&nbsp");
    }
    for (let j = 1; j <= ((2 * i) - 1); j++) {
        document.write("*");
    }
    document.write("<br>");
}


