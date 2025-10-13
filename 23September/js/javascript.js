// setTimeout(() => {
//     alert();
// },2000);


// let n = 0;
// let Interval = setInterval(() => {
//     n++;
//     console.log(n);
//     if (n == 10) {
//         clearInterval(Interval);
//     }
// }, 2000);


// let now = new Date();
// console.log(now);

// let Hours = now.getHours();
// console.log(Hours);

// let Minutes = now.getMinutes();
// console.log(Minutes);


// let Seconds = now.getSeconds();
// console.log(Seconds);

function currentTime() {
    let now = new Date();
    let CurrentHours = now.getHours();
    let CurrentMinutes = now.getMinutes();
    let CurrentSeconds = now.getSeconds();

    
    let greet = "";
    if(CurrentHours >= 5 && CurrentHours < 12){
        greet = "Good Morning !!";
    }
    else if(CurrentHours >= 12 && CurrentHours < 17){
        greet = "Good Afternoon !!";
    }
    else if(CurrentHours >= 17 && CurrentHours < 21){
        greet = "Good Evening !!";
    }
    else{
        greet = "Good Night !!";
    }

    document.getElementById("greet").innerText = greet;

    CurrentHours = CurrentHours < 10 ? "0" + CurrentHours : CurrentHours;
    CurrentMinutes = CurrentMinutes < 10 ? "0" + CurrentMinutes : CurrentMinutes;
    CurrentSeconds = CurrentSeconds < 10 ? "0" + CurrentSeconds : CurrentSeconds;

    let real = CurrentHours + ":" + CurrentMinutes + ":" + CurrentSeconds;

    document.getElementById("clock").innerText = now.toLocaleTimeString();

}

setInterval(currentTime, 1000);
currentTime();