console.log("vinculado");
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
let clic = 1;
// Accedo al elemento
const btn = document.getElementById('btn');
btn.addEventListener('click',hacerClic);

// Nombre
const nombre = document.getElementById('nombre');
nombre.addEventListener('input',cambiarNombre);

function cambiarNombre(){
    titulo.innerHTML = nombre.value;
}


function hacerClic(){
    // Alert
    alert("Hiciste clic "+clic);
    clic = clic + 1;
    titulo.classList.remove("rojo");
    titulo.classList.add("verde");
}

/*
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const btnSumar = document.getElementById('btn-suma');

let sum;
btnSumar.addEventListener('click',sumar);

function sumar(){
    sum = parseInt(numero1.value) + parseInt(numero2.value);
    document.getElementById('resultado').innerHTML = sum;
    console.log(sum);
}
*/


let a =  document.getElementById('numero2').value;
let b = document.getElementById('numero1').value;
console.log(b);
var producto = 0;
const btnb = document.getElementById('btn-suma');
btnb.addEventListener('click',hacerClic);
function hacerClic(){
    console.log(a.value);
    producto = parseInt(a)+parseInt(b);
    document.getElementById("resultado").innerHTML = producto;
}



/*
if (titulo.classList.contains("rojo")) {
    console.log("existe");
    titulo.classList.remove("rojo");
    titulo.classList.add("verde");
}else{
    console.log("no existe");
    titulo.classList.add("rojo");
}
*/
setTimeout(cambiarContenido, 5000);

function cambiarContenido() {
    parrafo.innerHTML="Mi perro es muy gruñon";

}




var lasP = document.getElementsByTagName("p");

var cantidad = lasP.length;
for (var i = 0; i < cantidad; i++) {
    status = lasP[i].getAttribute("class");
    if(status!=="null"){
        console.log(status);
    }
}


//alert("Hay " + num + " <p> elementos en este documento");



/*
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'key: ' + keyName);
  });
*/
/*  
document.addEventListener('keydown',lalala)

function lalala(event){
    const nombreTecla = event.key;
    alert('Se presiono \n\n' + 'tecla: ' + nombreTecla);
}*/



document.getElementById('btn2').addEventListener("click", () => {
    document.getElementById('eltexto').select();
    document.execCommand("copy");
    alert("Código copiado al portapapeles");
});
