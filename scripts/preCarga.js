
/*---------------------------FUNCIONES GLOBALES----------------------------*/

function randomNum(min, max) { //numero aleatorio
  return resultado = Math.floor( Math.random() * (max - min + 1)) + min;}

//Esconder scrollbar y enseñar al usar la rueda del raton
function entrandoMouse () {
  estadoMouse = true;
  verificarEstadoMouse();
}

function saliendoMouse() {
  estadoMouse = false;
  verificarEstadoMouse();
}

function verificarEstadoMouse() {
  if (estadoMouse == true &&  document.documentElement.scrollTop == 0) {//escondido
    document.body.style.overflow = 'hidden';
  }

  if (estadoMouse == false) {//visible
    document.body.style.overflow = 'visible';
  }
}

document.onmousewheel = function() { //estos 3 parafos son 60% copiados (Stack overflow)
    document.body.style.overflow = 'visible';
};
