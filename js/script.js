
let time = document.querySelector("#time");

window.addEventListener("load", timer());
setInterval(timer, 1000);

function timer(){
    time.innerHTML = new Date().toLocaleTimeString("fr");
    let seconds = new Date().getSeconds();
    time.classList.toggle("times", seconds % 3 === 0);   
}

