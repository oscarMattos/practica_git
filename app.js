
// Variables globales
var stateBoxShadow = true;
var stateBoxSizing = true;

// Funcion para hacer box-shadow
function boxShadowToggle() {
  let main = document.querySelector("#main");
  let buttonMain = document.querySelector("#main_button");
  if (stateBoxShadow) {
    main.style.transition = ".5s";
    main.classList.add("boxShadow");
    buttonMain.innerHTML = "remove box shadow";
    stateBoxShadow = false;
  } else {
    main.classList.remove("boxShadow");
    buttonMain.innerHTML = "add box shadow";
    stateBoxShadow = true;
  }
}

document.querySelector("#main_button").addEventListener("click", boxShadowToggle);

// Funcion para hacer box-sizing
function boxSizingToggle() {
  let header = document.querySelector("#header");
  let buttonHeader = document.querySelector("#header_button");
  if (stateBoxSizing) {
    header.style.width = "50%";
    header.style.transition = "1s";
    buttonHeader.innerHTML = "expand box";
    stateBoxSizing = false;
  } else {
    header.style.width = "100%";
    buttonHeader.innerHTML = "reduce box";
    stateBoxSizing = true;
  }
}

document.querySelector("#header_button").addEventListener("click", boxSizingToggle);

// Funciones para abrir y cerrar la navegacion lateral

function openNav() {
    let sideNav = document.querySelector("#sideNav");
    let darkBackground = document.querySelector("#darkBackground");
    sideNav.style.width = "250px";
    darkBackground.style.display = "block";
}

document.querySelector("#openNav").addEventListener("click", openNav);

function closeNav() {
    let sideNav = document.querySelector("#sideNav");
    let darkBackground = document.querySelector("#darkBackground");
    sideNav.style.width = "0";
    darkBackground.style.display = "none";
}

document.querySelector("#closeNav").addEventListener("click", closeNav);
