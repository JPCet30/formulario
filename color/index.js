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

picker1.oninput = updateGradient;
picker2.oninput = updateGradient;
split.oninput = updateGradient;

let color1 = "#b5caf9";
let color2 = "#aad186";
let splitPercent = 50;
function updateGradient(e){
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
    gradient.style.background = `linear-gradient(to right, ${color1} , ${splitPercent}% , ${color2} )`;    
}


