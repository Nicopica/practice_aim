var min = 0;
var seg = setInterval(repetir , 1000);

function repetir() {
  seg += 1;
  if (seg  == 60 ) {
    min += 1;
    seg = 0;}
    if (min < 10 && seg < 10) {
    document.getElementById("crono3").innerHTML = 'Tiempo = 0' + min + ':0' + seg}

  if (min >= 10 && seg >= 10) {
    document.getElementById("crono3").innerHTML = 'Tiempo = ' + min + ':' + seg}

  if (min >= 10 && seg < 10) {
    document.getElementById("crono3").innerHTML = 'Tiempo = ' + min + ':0' + seg}

  if (min < 10 && seg >= 10) {
    document.getElementById("crono3").innerHTML = 'Tiempo = 0' + min + ':' + seg}
}
