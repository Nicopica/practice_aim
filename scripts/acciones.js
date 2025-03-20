//Es optimizable
campo3.addEventListener( "mousedown" , aciertoArraySalaPequeña);

//Aquí está el ciclo para hacer los botones más pequeños
function decreciendo() {
    for (var i = 0,  l = arraySalaPequeña.length; i < l; i++) {//recorrer todos los elementos de la array
      arraySalaPequeña[i].style.marginTop = (parseFloat(arraySalaPequeña[i].style.marginTop) + tamaDecrecer / 2) + "px";
      arraySalaPequeña[i].style.height = (parseFloat(arraySalaPequeña[i].style.height) - tamaDecrecer) + "px";
      arraySalaPequeña[i].style.marginLeft = (parseFloat(arraySalaPequeña[i].style.marginLeft) + tamaDecrecer / 2) + "px";
      arraySalaPequeña[i].style.width = (parseFloat(arraySalaPequeña[i].style.width) - tamaDecrecer) + "px";//el tamaño del boton menos lo que decida

    if (parseFloat(arraySalaPequeña[i].style.height) <= 1) { //si es menor de 12px se cambiarán las coordenadas y el tamaño
      arraySalaPequeña[i].style.width =  tamañoDianaGlobal + "px";
      arraySalaPequeña[i].style.height = tamañoDianaGlobal + "px";
      arraySalaPequeña[i].style.marginTop = randomNum(0 , campo3.offsetHeight - tamañoDianaGlobal) + "px";
      arraySalaPequeña[i].style.marginLeft = randomNum(0 , campo3.offsetWidth - tamañoDianaGlobal) + "px";
      dianasDesparecidas += 1;
      document.getElementById("desaparicionesDiana").innerHTML = "Dianas desaparecidas = " + dianasDesparecidas;
      }
  }
}
//Aquí acaba el ciclo para hacer los botones más pequeños

//Hacer que hay más o menos dianas
function cambioDianasPequeño() {

  if (dianasSalaPequeño > document.getElementById("numeroDianasPequeño").value) { //significa que el número de dianas ha bajado
    for (dianasSalaPequeño; dianasSalaPequeño > document.getElementById("numeroDianasPequeño").value ; dianasSalaPequeño--) {
      objetivos3.removeChild(objetivos3.lastChild);
      arraySalaPequeña.shift();
    }
  }

  if (dianasSalaPequeño < document.getElementById("numeroDianasPequeño").value) { //significa que el número de dianas ha subido

    for (0; dianasSalaPequeño < document.getElementById("numeroDianasPequeño").value ; dianasSalaPequeño++) {
      arraySalaPequeña.unshift(document.createElement("div"));
      arraySalaPequeña[0].setAttribute("id", "Diana" + dianasSalaPequeño);
      arraySalaPequeña[0].style.marginTop = randomNum(0 , alturaAnterior - tamañoDianaGlobal) + "px"; //establecer coordenada y de la diana
      arraySalaPequeña[0].style.marginLeft = randomNum(0 , anchuraAnterior - tamañoDianaGlobal) + "px"; //establecer coordenada x de la diana
      arraySalaPequeña[0].style.width =  tamañoDianaGlobal + "px"; //establecer anchura
      arraySalaPequeña[0].style.height = tamañoDianaGlobal + "px"; //establecer altura
      arraySalaPequeña[0].style.backgroundColor = colorDiana; //color diana
      objetivos3.appendChild(arraySalaPequeña[0]);
    }
  }
}


function aciertoArraySalaPequeña(e) { //detectar a que das click

  document.documentElement.scrollTop = 0;
  if (document.body.style.overflow == 'visible') {
    document.body.style.overflow = 'hidden';
    return;
  }

  if (e.target.id !== e.currentTarget.id) { //acierto
    e.target.style.marginTop = randomNum(0 , campo3.offsetHeight - tamañoDianaGlobal) + "px"; //establecer coordenada y de la diana
    e.target.style.marginLeft = randomNum(0 , campo3.offsetWidth - tamañoDianaGlobal) + "px"; //establecer coordenada x de la diana
    e.target.style.height = tamañoDianaGlobal + "px";
    e.target.style.width = tamañoDianaGlobal + "px";
    sonidoAcierto.currentTime = 0; //iniciar desde el principio
    sonidoAcierto.play(); //poner efecto de sonido acierto
    puntuacion3 ++;
    rachaAciertos3 ++;}

  else if (e.target.id == e.currentTarget.id) { //fallo
    fallo3 ++;
    sonidoFallo.currentTime = 0; //si ya se esta reproduciendo parar el audio y volver a ponerlo
    sonidoFallo.play();

  if (rachaAciertos3 > mejorRachaPuntos) {mejorRachaPuntos = rachaAciertos3;}//comprobar si tienes mejor récord y cambiar el que había
    rachaAciertos3 = 0;}
    document.getElementById("fallos3").innerHTML = 'Fallos = ' + fallo3; //poner las estadísticas
    document.getElementById("puntos3").innerHTML = 'Puntuación = ' + puntuacion3;
    document.getElementById("racha3").innerHTML = 'Racha de aciertos = ' + rachaAciertos3;
    document.getElementById("mejorRacha").innerHTML = "Mejor racha = " + mejorRachaPuntos;
    porcentajeAciertosFallos3 =  100 * ( puntuacion3 / ( fallo3 + puntuacion3 )); //porcentaje de aciertos, solo 2 secimales, si son 00 nada

  if (Math.floor(porcentajeAciertosFallos3) == porcentajeAciertosFallos3)
  {document.getElementById("pAciFa3").innerHTML = 'Porcentaje de aciertos = ' + porcentajeAciertosFallos3 + "%";}
  else {document.getElementById("pAciFa3").innerHTML = 'Porcentaje de aciertos = ' + porcentajeAciertosFallos3.toFixed(2) + "%";}
}//Aquí acaba haciendo más o menos dianas
