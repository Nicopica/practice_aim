var segCuenta;
var centecimasCuenta = 1;
var intervaloCuenta;

document.getElementById("aceptarCuenta").addEventListener("click" , function () {
  puntuacion2 = 0;
  fallo2 = 0;
  porcentajeAciertosFallos2 = 0;
  f_aux2 = 0;
  document.getElementById("puntos2").innerHTML = 'Puntuación = ' + puntuacion2;
  document.getElementById("fallos2").innerHTML = 'Fallos = ' + fallo2;
  document.getElementById("pAciFa2").innerHTML = 'Porcentaje de aciertos = ' + porcentajeAciertosFallos2 + "%";
document.getElementById("aceptarCuenta").style.display = "none";
document.getElementById("valorCuenta").style.display = "none";
document.getElementById("ob12").style.display = "block";
activarCuenta = 1;
centecimasCuenta = 1;
segCuenta = parseInt(document.getElementById("valorCuenta").value);
intervaloCuenta = setInterval(temporizadorActivo , 10);

  function temporizadorActivo() {
    if (estado == 3 && activarCuenta == 1) {

      centecimasCuenta -= 1;
    if (centecimasCuenta  == 0 && segCuenta != 0) {
      segCuenta -= 1;
      centecimasCuenta = 100;}

  if (segCuenta < 10 && centecimasCuenta < 10) {
    document.getElementById("tempo").innerHTML = 'Tiempo = 0' + segCuenta + ':0' + centecimasCuenta;}

  if (segCuenta >= 10 && centecimasCuenta >= 10) {
    document.getElementById("tempo").innerHTML = 'Tiempo = ' + segCuenta + ':' + centecimasCuenta;}

  if (segCuenta >= 10 && centecimasCuenta < 10) {
    document.getElementById("tempo").innerHTML = 'Tiempo = ' + segCuenta + ':0' + centecimasCuenta;}

  if (segCuenta < 10 && centecimasCuenta >= 10) {
    document.getElementById("tempo").innerHTML = 'Tiempo = 0' + segCuenta + ':' + centecimasCuenta;}

    if (segCuenta == 0 && centecimasCuenta == 0) {
      document.getElementById("tempo").innerHTML = 'Tiempo = 00:00';
      clearInterval(intervaloCuenta);
      alert("Se acabó el tiempo");
      activarCuenta = 0;
      reiniciandoCuenta();
      }
    }
  }
});

document.getElementById("reiniciarCuenta").addEventListener("click" , reiniciandoCuenta);

function reiniciandoCuenta() {
  clearInterval(intervaloCuenta);
  activarCuenta = 0;
  document.getElementById("tempo").innerHTML = 'Tiempo = 00:00'
  document.getElementById("aceptarCuenta").style.display = "block";
  document.getElementById("valorCuenta").style.display = "block";
  document.getElementById("ob12").style.display = "none";
}
