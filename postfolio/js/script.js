

let icon = document.querySelector(".navicon");
icon.addEventListener("click",onClick);
function onClick(){
   document.querySelector(".navbar-nav").classList.toggle("active")
}