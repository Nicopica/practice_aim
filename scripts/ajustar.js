//Ajustar el tamaño de la diana
function cambiarTamaño() {
  tamañoDianaGlobal = document.getElementById("ajustarTamaño").value;
  document.getElementById("dianaPrueba").style.width = tamañoDianaGlobal + "px";
  document.getElementById("dianaPrueba").style.height = tamañoDianaGlobal + "px";

  for (var i = 0,  l = arraySalaPequeña.length; i < l; i++) {
      arraySalaPequeña[i].style.marginTop = (parseFloat(arraySalaPequeña[i].style.marginTop) + (aux_tamañoDianaGlobal - tamañoDianaGlobal) / 2) + "px";
      arraySalaPequeña[i].style.height = tamañoDianaGlobal + "px";
      arraySalaPequeña[i].style.marginLeft = (parseFloat(arraySalaPequeña[i].style.marginLeft) + (aux_tamañoDianaGlobal - tamañoDianaGlobal) / 2) + "px";
      arraySalaPequeña[i].style.width = tamañoDianaGlobal + "px";
  }
  aux_tamañoDianaGlobal = tamañoDianaGlobal;
}

//Ajustar el volúmen
document.getElementById("barraVolumen").value = volumenGeneral * 1000;

function cambiarVolumen() {
  volumenGeneral = document.getElementById("barraVolumen").value / 1000;
  sonidoFallo.volume = volumenGeneral;
  sonidoAcierto.volume = volumenGeneral;
  sonidoAcierto.play(); //tienes que cambiar el sonido cuando lo ajustas
}

//Ajustar color del fondo
var colorPicker = new iro.ColorPicker("#picker1", {
  width: 170,
  color: "#b5af04"
});
colorPicker.on('color:change', function(color) {
  colorFondo = color.hexString;
  objetivos3.style.backgroundColor = colorFondo //cambiar fondo
    document.getElementById("pruebaObjetivos").style.backgroundColor = colorFondo;
});

//Ajustar color diana
var colorPicker = new iro.ColorPicker("#picker2", {
  width: 170,
  color: "#D11C19"
});
//Aplicar color a todas las dianas
colorPicker.on('color:change', function(color) {
  colorDiana= color.hexString;
  document.getElementById("dianaPrueba").style.backgroundColor = colorDiana; //añadir color a cada diana

    for (var i = 0,  l = arraySalaPequeña.length; i < l; i++) {arraySalaPequeña[i].style.backgroundColor = colorDiana;}
    //cambiar todas las dianas de la array
});


//Cambair la velocidad de desaparición
function cambioVelocidad() { //cambiar la velocidad de desaparición
  tiempoDecrecer = Math.abs(document.getElementById("velocidadPequeño").value / 10 - 100);
  if (tiempoDecrecer == 100) {
    clearInterval(repeticionDecrecer);
    return;
  }
  clearInterval(repeticionDecrecer);
  repeticionDecrecer = setInterval(decreciendo , tiempoDecrecer);
}


//Cambio de dimensiones de la página
 window.addEventListener("resize", function() { //reajustar limites y establecer nuevo punto
     campo3.style.height = innerHeight / 100 * 98 + "px";
  });


function revisarPosicionDianas() {
  if (estado == 0) {
    for (var i = 0,  l = arraySalaPequeña.length; i < l; i++) {
      console.log(campo3.clientWidth);
      if (parseFloat(arraySalaPequeña[i].style.marginTop + tamañoDianaGlobal) > (campo3.offsetHeight)) { //se sale por abajo
        console.log("fuera de limites abajo");
      }

      if (parseFloat(arraySalaPequeña[i].style.marginLeft + tamañoDianaGlobal) > (campo3.offsetWidth - 10 /*Margen de la derecha*/)) { //se sale por la derecha //esta mal el detector por unos pixeles
        arraySalaPequeña[i].style.marginLeft = (window.innerWidth - (10 + 10 + 15 + /*Margen derecha + Margen izquierda + Lo que mide la scrollbar*/ tamañoDianaGlobal)) + "px";
      } //campo3.offsetWidth no es una medida exacta
    }
  }
}

//campo3.offsetWidth no es igual a la anchura exacta























//ESTEREGG
document.getElementById("pruebaObjetivos").onmousedown = function (e) {
  if (e.target == e.currentTarget) {
    sonidoFallo.currentTime = 0; //si ya se esta reproduciendo parar el audio y volver a ponerlo
    sonidoFallo.play();
    fallo3++;
    document.getElementById("fallos3").innerHTML = 'Fallos = ' + fallo3; //poner las estadísticas
    trampasHechas--;
  }
  else {
    trampasHechas++;
    puntuacion3++;
    sonidoAcierto.currentTime = 0; //iniciar desde el principio
    sonidoAcierto.play(); //poner efecto de sonido acierto
    document.getElementById("puntos3").innerHTML = 'Puntuación = ' + puntuacion3;
  }
  /*
  if (trampasHechas == 3) {
      document.getElementById("pruebaObjetivos").innerHTML = "Te estás sumando puntos";
  }
  if (trampasHechas == 5) {
    document.getElementById("pruebaObjetivos").innerHTML = "No deberías seguir haciéndolo";
  }
  if (trampasHechas == 8) {
    document.getElementById("pruebaObjetivos").innerHTML = "¿No crees que deberías parar?😒";
  }
  if (trampasHechas == 13) {
    document.getElementById("pruebaObjetivos").innerHTML = "Ya te has pasado🙄, te avisé"
  }
  */
  if (trampasHechas == 14) {
    setInterval( sonidoTrampas , 1000 );
    function sonidoTrampas() {
      document.getElementById("sonitrampas").play();
    }

    // reiniciarInfo3();
    //location.reload();
    //location.assign("");
  }
}
