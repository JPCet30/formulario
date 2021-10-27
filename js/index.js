console.log("vinculado");
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");


if (titulo.classList.contains("rojo")) {
    console.log("existe");
    titulo.classList.remove("rojo");
    titulo.classList.add("verde");
}else{
    console.log("no existe");
    titulo.classList.add("rojo");
}

setTimeout(cambiarContenido, 5000);

function cambiarContenido() {
    parrafo.innerHTML="Mi perro es muy gruñon";

}

