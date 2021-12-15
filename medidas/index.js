// Seleccion
const valor = document.getElementById("valor");
const unidadOrigen = document.getElementById("unidadOrigen");
const unidadDestino = document.getElementById("unidadDestino");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn");


// Escucha de eventos
btn.addEventListener("click",convertir);

// Creamos la función convertir
function convertir() {
    console.log("dentro de la función");

    switch(unidadOrigen.value) {
        case 'mm':
            if (unidadDestino.value=='cm') {
                resultado.innerHTML = valor.value/10;
            }else if (unidadDestino.value=='mts'){
                resultado.innerHTML = valor.value/100;
            }else {
                resultado.innerHTML = valor.value;
            }


        break;
        case 'cm':

        break;
        case 'mts':

        break;
    }




}