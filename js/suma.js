const btnSuma = document.querySelector('#btn-sumar');
const resultado = document.querySelector('#resultado');

btnSuma.addEventListener('click',suma);

function suma() {
    let suma;
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    suma = parseInt(num1)+parseInt(num2);
    resultado.classList.remove('invisible');
    
    resultado.textContent = `Resultado ${suma}`;

    console.log(suma);
}