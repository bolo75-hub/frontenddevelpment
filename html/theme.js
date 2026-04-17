// Obtener todos los botones de tema usando el selector de clase
const btns = document.querySelectorAll(".theme-btn");

// Obtener el objeto body
const bd = document.querySelector("body");

// Iterar todos los botones para asociar a cada uno una tarea
// que queremos ejecutar cuando ocurra un evento de clic
for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    
    btn.addEventListener("click", () => {
        // Extraer el nombre del tema desde el atributo data-theme
        const selectedTheme = btn.getAttribute("data-theme");
        
        console.log("Cambiando a tema: " + selectedTheme);
        
        // Cambiar la clase del body por el nombre del tema
        bd.className = selectedTheme;
    });
}