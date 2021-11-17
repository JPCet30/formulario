let maximo = 140;
/* Selecciono elementos */
const texto = document.getElementById("texto");
const mensaje = document.getElementById("mensaje");

/* Escuchamos */
texto.addEventListener("input",actualizar);

function actualizar() {
    console.log(texto.value.length);
    let resta = maximo - texto.value.length;
    if (texto.value.length>=maximo) {
        // verdadero
        mensaje.innerHTML = "Superaste los 140";
        texto.style.background = "red";
    }else{
        // falso
        mensaje.innerHTML = "Te falta para escribir "+resta;
        texto.style.background = "white"
    }
}
