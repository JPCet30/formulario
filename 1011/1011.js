//console.log("hola");

/* Copiar al portapapeles */
const texto = document.getElementById("texto");
document.getElementById("btn-copiar").addEventListener("click",copia);

function copia() {
    texto.select();
    document.execCommand("copy");
    document.getElementById("resultado").innerHTML = "Copiado"
}

/* Utilizamos TagName para recorrer todas las etiquetas P */
const parrafos = document.getElementsByTagName("p");
for (let i=0;i<parrafos.length;i=i+1) {
    //console.log(i);
    let laP = parrafos[i].getAttribute("class");
    
    if (laP==null) {
        console.log(laP);
    }
}




let a = ['hola','chau','chauchito'];
//console.log(parrafos.length)