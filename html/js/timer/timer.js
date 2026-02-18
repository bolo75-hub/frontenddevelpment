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
//this bucle means that for each iteration of the loop, the font size of the timerLabel element will first increase from 150px to 240px in increments of 10px,
// and then decrease back to 150px in decrements of 10px.
// The console.log statement will output the current font size to the console during each iteration of the loop.
// associate the click event with afunction, so that
// each time when the button is clocked, the function
// will be called
timerDysplay.style.fontSize = "150px"; // cambiar tamaño


//ARROW FUNCTION AS PARAMETER
stopBtn.addEventListener("click", () => { });
let fontSize = 20;
let maximumSize = 80;
let minimumSize = 20;
let isGrowing = false;
//ANONYMOUS FUNCTION
startBtn.addEventListener("click", function () {
    setInterval(() => {
        //1 if the size of the font has reached the maximum,
        //the size starts to reduce gradually
        if (isGrowing) {
            fontSize++;
            timerDysplay.style.fontSize = fontSize + "px";
            //check if the size has reached it 
            if (fontSize >= maximumSize) {
                isGrowing = false;
            }
        }
        //2 if the size of the font has reached the minimum,
        //the size starts to increase gradually
        else {
            fontSize--;
            timerDysplay.style.fontSize = fontSize + "px";
            if (fontSize <= minimumSize) {
                isGrowing = true;
            }
        }
        
    }, 20);

});
//NAMED FUNCTION
function resetTimer() {

}

stopBtn.addEventListener('click', () => { });
resetBtn.addEventListener('click', () => { });
function sizeAnimation() {
    let size = 40;
    let x = 10000;
    while (x == 0) {
        for (let i = 0; i < 50; i++) {
            size++;
            timerlabel.style.frontSize = size + "px";
        }
        for (let j = 0; j < 50; j++) {
            size--;
            timerlabel.style.fontSize = size + "px";
        }
        x--;
    }
}





