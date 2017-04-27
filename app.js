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
    main.setAttribute("style", "transition: .5s;");
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
    header.setAttribute("style", "transition: 1s; width: 50%;");
    buttonHeader.innerHTML = "expand box";
    stateBoxSizing = false;
  } else {
    header.setAttribute("style", "transition: 1s; width: 100%;");
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

function animateSkill(skill, percentage) {
  let elem = document.querySelector(skill);
  let width = 0;
  let id = setInterval(frame, 25);

  function frame() {
    if (width >= percentage) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

window.onload = function() {
  animateSkill(".skills.html", 90);
  animateSkill(".skills.css", 85);
  animateSkill(".skills.js", 75);
}

// funcion para hacer que la imagen del chip vaya al otro lado

function slideChipImg() {
  let img = document.querySelector(".img_chip");
  if (stateChipImg) {
    img.setAttribute("style", "float: right; margin: 0 -25px 0 10px; transition: .5s; background-color: #f44336;");
    stateChipImg = false;
  } else {
    img.setAttribute("style", "float: left; margin: 0 10px 0 -25px; transition: .5s; background-color: #2196F3;")
    stateChipImg = true;
  }
}

document.querySelector(".img_chip").addEventListener("click", slideChipImg);

// funcion para hacer que el input search tenga un ancho de 100%

function slideInputSearch() {
  let iconSearch = document.querySelector("#icon_search");
  let searchInput = document.querySelector("#input_search");
  if (stateSearchInput) {
    iconSearch.setAttribute("style", "background-color: #f44336;");
    searchInput.setAttribute("style","transition: .5s; width: 100%; padding: 0 16px 0 60px;");
    searchInput.focus();
    stateSearchInput = false;
  } else {
    iconSearch.setAttribute("style", "background-color: #2196F3;");
    searchInput.setAttribute("style", "transition:.5s; width: 50px; padding: 0;")
    stateSearchInput = true;
  }
}
document.querySelector("#icon_search").addEventListener("click", slideInputSearch);
