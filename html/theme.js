const btns = document.querySelectorAll(".theme-btn");

const bd = document.querySelector("body");

/**for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    
    btn.addEventListener("click", () => {
        const selectedTheme = btn.getAttribute("data-theme");
        console.log("Cambiando a tema: " + selectedTheme);
        bd.className = selectedTheme;
    });
}*/


/** 
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
console.log("current theme = " + theme);*/


const theme = localStorage.getItem("theme");
if(theme){
    bd.className = theme;
}

console.log(btns);
btns.forEach(btn => {
    console.log(btn),
    btn.addEventListener("click", () => {
        console.log(btn.getAttribute('data-theme'));
        console.log(btn.getAttribute('class'));
        bd.className = btn.getAttribute('data-theme');    
        localStorage.setItem("theme", btn.getAttribute("data-theme"))
    });
});