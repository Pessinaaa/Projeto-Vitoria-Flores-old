//Função para o menu de navegação da galeria trocar de cor quando fixado no topo da página
window.onscroll = function() { MenuSticky(); };
let navbar = document.getElementById("navegacao-galeria");
let sticky = navbar.offsetTop;
function MenuSticky() {
  if (window.pageYOffset >= sticky) {
        navbar.style.background="rgb(224, 168, 180, 0.75)";
  }
  else {
        navbar.style.background="transparent"; 
  }
}