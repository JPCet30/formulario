// Seleccionar
// const color1 = document.getElementById('color1');
// const color2 = document.getElementById('color2');
// const separa = document.getElementById('separa');
// const fondo = document.getElementById('fondo');

// Escuchar
// separa.addEventListener('input',cambiarColor);
// Realizar acción por medio de una función
// function cambiarColor(){
//     console.log("dentro de la funcion");
//     fondo.style.background = `linear-gradient(to right,${color1.value} ${separa.value}%,${color2.value})`;

// }

// Seleccionar
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");


// Escucho
btn.addEventListener('click',promedio)


// Función
function promedio(){
    let promedio;
    promedio = parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value);
    promedio = promedio / 3;
    resultado.innerHTML = promedio.toFixed(2);
    
    if (promedio<7) {
        resultado.classList.remove('verde');
        resultado.classList.add('rojo');
    }else{
        resultado.classList.remove('rojo');
        resultado.classList.add('verde');
    }
}