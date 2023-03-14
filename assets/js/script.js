const contenedor = document.querySelectorAll(".layout")

// for (let index = 0; index < contenedor.length; index++) {
//     const element = contenedor[index];
//     console.log(element);
// }

contenedor.forEach(element => {
    console.log(element)
});

const ultimodiv = contenedor[2]
const primerdiv = contenedor[0]
// ultimodiv.style.display = "none"
ultimodiv.setAttribute("style", "display:none")

primerdiv.innerHTML= ", soy el primero"

document.write("<h1>Hola estudiantes</h1>")