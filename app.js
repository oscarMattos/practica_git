
// Variables globales
var stateBoxShadow = true;
var stateBoxSizing = true;
var stateChipImg = true;
var stateSearchInput = true;

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

// funcion para cargar las barras de los skills cuando carga la página
function moveSkillsHtml() {
    let elem = document.querySelector(".skills.html");
    let width = 0;
    let id = setInterval(frame, 25);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}
function moveSkillsCss() {
    let elem = document.querySelector(".skills.css");
    let width = 0;
    let id = setInterval(frame, 25);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}
function moveSkillsJs() {
    let elem = document.querySelector(".skills.js");
    let width = 0;
    let id = setInterval(frame, 25);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

window.onload = function(){
  moveSkillsHtml();
  moveSkillsCss();
  moveSkillsJs();
}

// funcion para hacer que la imagen del chip vaya al otro lado

function slideChipImg(){
  let img = document.querySelector(".img_chip");
  if(stateChipImg){
    img.style.float = "right";
    img.style.margin = "0 -25px 0 10px";
    img.style.transition = ".5s";
    img.style.backgroundColor = "#f44336";
    stateChipImg = false;
  } else {
    img.style.float = "left";
    img.style.margin = "0 10px 0 -25px";
    img.style.backgroundColor = "#2196F3";
    stateChipImg = true;
  }
}

document.querySelector(".img_chip").addEventListener("click", slideChipImg);

// funcion para hacer que el input search tenga un ancho de 100%

function slideInputSearch(){
  let iconSearch = document.querySelector("#icon_search");
  let searchInput = document.querySelector("#input_search");
  if (stateSearchInput) {
    searchInput.style.transition = ".5s";
    searchInput.style.width = "100%";
    searchInput.style.padding = "0 16px 0 60px";
    searchInput.focus();
    stateSearchInput = false;
  } else {
    searchInput.style.transition = ".5s";
    searchInput.style.width = "50px";
    searchInput.style.padding = "0";
    stateSearchInput = true;
  }
}
document.querySelector("#icon_search").addEventListener("click", slideInputSearch);
