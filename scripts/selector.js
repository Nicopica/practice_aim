// estado: 0 = CAMPO DE TIRO / 1 = AJUSTES //
var estado = 0

document.getElementById("irAjustes").addEventListener("click",cambiarEstado);
document.getElementById("irSalaTiro").addEventListener("click",cambiarEstado);

function cambiarEstado() {
  if (estado == 0) {
    document.getElementById("salaPequeño").style.display = "none";//ocultar campo de tiro
    document.getElementById("ajustes").style.display = "block";//enseñar ajustes
    estado = 1;
  }
  else if (estado == 1) {
    document.getElementById("ajustes").style.display = "none";//ajustes
    document.getElementById("salaPequeño").style.display = "block";//mostrar campo de tiro
    anchuraAnterior = campo3.offsetWidth;
    alturaAnterior = campo3.offsetHeight;
    estado = 0;
  }
}
