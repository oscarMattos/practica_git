
var estadoBoxShadow = true;
var estadoBoxSizing = true;

function boxShadowToggle() {
  let main = document.querySelector("#main");
  let buttonMain = document.querySelector("#main_button");
  if (estadoBoxShadow) {
    main.style.transition = ".5s";
    main.classList.add("boxShadow");
    buttonMain.innerHTML = "remove box shadow";
    estadoBoxShadow = false;
  } else {
    main.classList.remove("boxShadow");
    buttonMain.innerHTML = "add box shadow";
    estadoBoxShadow = true;
  }
}

document.querySelector("#main_button").addEventListener("click", boxShadowToggle);

function boxSizingToggle() {
  let header = document.querySelector("#header");
  let buttonHeader = document.querySelector("#header_button");
  if (estadoBoxSizing) {
    header.style.width = "50%";
    header.style.transition = "1s";
    buttonHeader.innerHTML = "expand box";
    estadoBoxSizing = false;
  } else {
    header.style.width = "100%";
    buttonHeader.innerHTML = "reduce box";
    estadoBoxSizing = true;
  }
}

document.querySelector("#header_button").addEventListener("click", boxSizingToggle);
