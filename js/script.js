
let time = document.querySelector("#time");

window.addEventListener("load", timer());
setInterval(timer, 1000);

function timer(){
    time.innerHTML = new Date().toLocaleTimeString("fr");
    let times = document.querySelector(".times");
    let seconds = new Date().getSeconds();
    if(seconds % 3 === 0){
        times.style.color = "red";
        time.style.fontWeigth = "bold";
    }
    else{
        times.style.color = "black";
        times.style.fontWeigth = "normal";
    }
}

