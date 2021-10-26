let t = 0;
const btn = document.getElementById('btn')
btn.addEventListener("click", lafuncion);
const tit = document.getElementById('tit');
const inpu = document.getElementById('prueba')
const img = document.getElementById('img')



console.log(inpu.getAttribute("type"))
inpu.addEventListener("input" , cambiar)

function cambiar() {
    tit.innerHTML = inpu.value;
}

function lafuncion(){
    t = t + 1;
    console.log("hice clic "+img.getAttribute("src"));
    if(tit.classList.contains("rojo")) {
        tit.classList.remove("rojo");
        tit.classList.add("verde");
        tit.style.fontSize = "2em";
        img.setAttribute("src","img/logo-trans-300.png");
    }else{
        tit.classList.remove("verde")
        tit.classList.add("rojo")
        tit.style.fontSize = "2.5em";
        img.setAttribute("src","img/estudiantes.jpg");
    }
    tit.innerHTML = t;
}
