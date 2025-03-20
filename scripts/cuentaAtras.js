var s_ob12 = document.getElementById("ob12"); //la diana
var sonidoAcierto = document.getElementById("soniacierto"); //presentar los sonidos
var sonidoFallo = document.getElementById("sonifallo");
var puntuacion2 = 0;
var fallo2 = 0;
var porcentajeAciertosFallos2 = 0;
var f_aux2 = 0;
var activarCuenta = 0;
var campo2 = document.getElementById("objetivos2");

function iniciarAtras() {
  document.getElementById("menu").style.display = "none"; //ocultar el menu
  document.getElementById("salaCuenta").style.display = "block";//practicar punteria
  campo2.style.height = innerHeight / 100 * 70 + "px"; //establecer dimensiones del campo de tiro
  s_ob12.style.marginTop = randomNum(0 , campo2.offsetHeight - tamañoDianaGlobal) + "px"; //establecer coordenada y de la diana
  s_ob12.style.marginLeft = randomNum(0 , campo2.offsetWidth - tamañoDianaGlobal) + "px"; //establecer coordenada x de la diana
  s_ob12.style.width =  tamañoDianaGlobal + "px"; //establecer anchura
  s_ob12.style.height = tamañoDianaGlobal + "px"; //establecer altura
}

campo2.addEventListener("mousedown" , tablon2);
s_ob12.addEventListener("mousedown" , acierto2); //comprobar si das click


function tablon2() {
  if (activarCuenta == 1) {
  fallo2 += 1;
  document.getElementById("fallos2").innerHTML = 'Fallos = ' + fallo2; //poner las estadisticas
  document.getElementById("puntos2").innerHTML = 'Puntuación = ' + puntuacion2;

  porcentajeAciertosFallos2 =  100 * ( puntuacion2 / ( fallo2 + puntuacion2 )); //porcentaje de aciertos, solo 2 secimales, si son 00 nada
    if (Math.floor(porcentajeAciertosFallos2) == porcentajeAciertosFallos2) {document.getElementById("pAciFa2").innerHTML = 'Porcentaje de aciertos = ' + porcentajeAciertosFallos2 + "%";}
    else {document.getElementById("pAciFa2").innerHTML = 'Porcentaje de aciertos = ' + porcentajeAciertosFallos2.toFixed(2) + "%";}

  if (f_aux2 != fallo2) {
    f_aux2 = fallo2;
    sonidoFallo.currentTime = 0; //si ya se esta reproduciendo parar el audio y volver a ponerlo
    sonidoFallo.play();
  }
  }
}


function acierto2() {
  s_ob12.style.marginTop = randomNum(0 , campo2.offsetHeight - tamañoDianaGlobal) + "px"; //establecer coordenada y de la diana
  s_ob12.style.marginLeft = randomNum(0 , campo2.offsetWidth - tamañoDianaGlobal) + "px"; //establecer coordenada x de la diana

  sonidoAcierto.currentTime = 0; //iniciar desde el principio
  sonidoAcierto.play(); //poner efecto de sonido acierto

  puntuacion2 += 1;
  fallo2 -= 1;
  porcentajeAciertosFallos2 =  100 * ( puntuacion2 / fallo2 );
}


document.getElementById("volverCuenta").addEventListener("click" , reiniciarInfo2); //volver al menu

function reiniciarInfo2() { //reiniciar las estadisticas cada vez que vuelves
  puntuacion2 = 0;
  fallo2 = 0;
  porcentajeAciertosFallos2 = 0;
  f_aux2 = 0;
  document.getElementById("puntos2").innerHTML = 'Puntuación = ' + puntuacion2;
  document.getElementById("fallos2").innerHTML = 'Fallos = ' + fallo2;
  document.getElementById("pAciFa2").innerHTML = 'Porcentaje de aciertos = ' + porcentajeAciertosFallos2 + "%";
  reiniciandoCuenta();
  irMenu();
}
