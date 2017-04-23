var estado = true;
function boxShadowToggle(){
  if(estado){
    document.getElementById("main").classList.add("boxShadow");
    document.getElementById("main_button").innerHTML = "remove box shadow";
    estado = false;
  }
  else{
    document.getElementById("main").classList.remove("boxShadow");
    document.getElementById("main_button").innerHTML = "add box shadow";
    estado = true;
  }
}

document.getElementById("main_button").addEventListener("click", boxShadowToggle);
