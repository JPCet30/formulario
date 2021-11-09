// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider. 
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.

let picker1 = document.getElementById("picker-1");
let picker2 = document.getElementById("picker-2");
let split = document.getElementById("split");
let gradient = document.getElementById("gradient");

split.addEventListener('input',algo);

/*
picker1.input = updateGradient;
picker2.input = updateGradient;
split.input = updateGradient;*/

let color1 = "#b5caf9";
let color2 = "#aad186";
let splitPercent = 50;
//e es el evento y e.target se refiere elemento clickado
function updateGradient(e) {
  switch (e.target) {
    case picker1:
      color1 = e.target.value;
      break;
    case picker2:
      color2 = e.target.value;
      break;
    case split:
      splitPercent = e.target.value;
      break;

  }


/*

  let gradiente = `linear-gradient(to right, ${color1} , ${splitPercent}% , ${color2} )`;
  gradient.style.background = gradiente;
  console.log(gradiente);*/
}


function algo() {
  gradient.style.background = `linear-gradient(to right, ${picker1.value} ${split.value}%, ${picker2.value}`
  //document.getElementById("codeblock").innerText = `linear-gradient(to right, ${colorOneEl.value} ${splitEl.value}%, ${colorTwoEl.value})`

}

