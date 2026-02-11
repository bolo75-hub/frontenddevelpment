// document object represents the whole html page wich is
// a three data structure
// document.getElementById("id of an elementg in thew htmlpage")
// this method or command allows us to retrieve an element
// in our page by its id

const timerDysplay = document.getElementById("timerlabel");
console.debug(timerDysplay);
const stopBtn = document.getElementById("stopBtn");
console.debug(stopBtn);
const resetBtn = document.getElementById("resetBtn");
console.debug(resetBtn);
const startBtn = document.getElementById("startBtn");
console.debug(startBtn);
timerDysplay.style.fontSize = "150px"; // cambiar tamaño


startBtn.addEventListener("click", ()=>{});
sizeAnimation();

function sizeAnimation() {
let size = 40;
let x = 10000;
while(x==0){
for (let i = 0; i <50; i++) {
    size ++;
    timerlabel.style.frontSize = size + "px";
}
    for (let j = 0; j <50; j++) {
        size --;
        timerlabel.style.fontSize = size + "px";
}
x--;
}
}

